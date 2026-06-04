import { Config, Context, Effect, Layer } from "effect";
import {
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
  productsResponseSchema,
  type Product,
  type ProductList,
} from "./schemas.js";

/* ============================================================
 * 1. DEFINITION
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
 * 2. IMPLEMENTATION
 * ============================================================ */
export const ProductServiceLive = Layer.effect(
  ProductService,
  Effect.gen(function* () {
    // Read the DummyJSON base URL once, when the layer is built. The default
    // ConfigProvider reads from process.env, which TanStack Start populates
    // from `.env` in dev and Cloudflare (with nodejs_compat) exposes at runtime.
    const baseUrl = yield* Config.string("DUMMY_JSON_BASE_URL");

    // Build a client that prepends the base URL to every request and treats
    // any non-2xx status as a failure (HttpClientError with a StatusCodeError).
    const client = (yield* HttpClient.HttpClient).pipe(
      HttpClient.mapRequest(HttpClientRequest.prependUrl(baseUrl)),
      HttpClient.filterStatusOk,
    );

    // ============================================
    // Fetches the full list of products
    // ============================================
    function getProducts() {
      return client.get("/products").pipe(
        Effect.flatMap(
          HttpClientResponse.schemaBodyJson(productsResponseSchema),
        ),
        Effect.map((response) => response.products),
        Effect.catchTag("SchemaError", (error) =>
          Effect.fail(
            new ProductsInvalidResponseError({ cause: error.message }),
          ),
        ),
        Effect.catchTag("HttpClientError", (error) =>
          Effect.fail(new ProductsFetchError({ cause: error.message })),
        ),
      );
    }

    // ============================================
    // Fetches a single product by its ID
    // ============================================
    function getProductById(id: number) {
      return client.get(`/products/${id}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(productSchema)),
        Effect.catchTag("SchemaError", (error) =>
          Effect.fail(
            new ProductInvalidResponseError({ cause: error.message }),
          ),
        ),
        Effect.catchTag(
          "HttpClientError",
          (
            error,
          ): Effect.Effect<never, ProductNotFoundError | ProductFetchError> => {
            // DummyJSON returns 404 when the product does not exist.
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
    }

    return { getProducts, getProductById };
  }),
);
