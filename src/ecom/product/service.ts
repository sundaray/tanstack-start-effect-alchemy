import { Config, ConfigProvider, Context, Effect, Layer } from "effect";
import {
  FetchHttpClient,
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "effect/unstable/http";
import {
  ProductFetchError,
  ProductInvalidResponseError,
  ProductNotFoundError,
  ProductsFetchError,
  ProductsInvalidResponseError,
} from "./errors.js";
import {
  productSchema,
  productListSchema,
  type Product,
  type ProductList,
} from "./schemas.js";

/* ============================================================
 * 1. DEFINITION — the interface only, no implementation
 * ============================================================ */
export class ProductService extends Context.Service<
  ProductService,
  {
    getProducts: () => Effect.Effect<
      ProductList,
      ProductsFetchError | ProductsInvalidResponseError
    >;

    getProductById: (
      id: number,
    ) => Effect.Effect<
      Product,
      ProductNotFoundError | ProductInvalidResponseError | ProductFetchError
    >;
  }
>()("ecom/ProductService") {}

/* ============================================================
 * 2. IMPLEMENTATION — build the methods over an HttpClient
 * ============================================================ */
export const ProductServiceLayer = Layer.effect(
  ProductService,
  Effect.gen(function* () {
    const baseUrl = yield* Config.string("BASE_URL").pipe(
      Config.nested("DUMMY_JSON"),
    );

    // A client pinned to DummyJSON that fails on any non-2xx status.
    const client = (yield* HttpClient.HttpClient).pipe(
      HttpClient.mapRequest(HttpClientRequest.prependUrl(baseUrl)),
      HttpClient.filterStatusOk,
    );

    // ============================================
    // Fetches the full list of products
    // ============================================
    const getProducts = () =>
      client.get("/products").pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(productListSchema)),
        Effect.catchTag("SchemaError", (e) =>
          Effect.fail(new ProductsInvalidResponseError({ cause: e.message })),
        ),
        Effect.catchTag("HttpClientError", (e) =>
          Effect.fail(new ProductsFetchError({ cause: e.message })),
        ),
      );

    // ============================================
    // Fetches a single product by its ID (404-aware)
    // ============================================
    const getProductById = (id: number) =>
      client.get(`/products/${id}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(productSchema)),
        Effect.catchTag("SchemaError", (e) =>
          Effect.fail(new ProductInvalidResponseError({ cause: e.message })),
        ),
        Effect.catchTag(
          "HttpClientError",
          (
            error,
          ): Effect.Effect<never, ProductNotFoundError | ProductFetchError> => {
            if (
              error.reason._tag === "StatusCodeError" &&
              error.reason.response.status === 404
            ) {
              return Effect.fail(new ProductNotFoundError());
            }
            return Effect.fail(new ProductFetchError({ cause: error.message }));
          },
        ),
      );

    return { getProducts, getProductById };
  }),
);

/* ============================================================
 * 3. LIVE — satisfy the layer's dependencies
 * ============================================================ */
export const ProductServiceLive = ProductServiceLayer.pipe(
  Layer.provide(FetchHttpClient.layer),
);
