import { Context, Effect, Layer, Schema } from "effect";
import { ProductDbService } from "./db.js";
import {
  ProductDbError,
  ProductInvalidResponseError,
  ProductNotFoundError,
  ProductsDbError,
  ProductsInvalidResponseError,
} from "./errors.js";
import {
  productSchema,
  productListSchema,
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
      ProductsDbError | ProductsInvalidResponseError
    >;

    getProductById: (
      id: number,
    ) => Effect.Effect<
      Product,
      ProductNotFoundError | ProductInvalidResponseError | ProductDbError
    >;
  }
>()("ecom/ProductService") {}

/* ============================================================
 * 2. IMPLEMENTATION
 * ============================================================ */
export const ProductServiceLive = Layer.effect(
  ProductService,
  Effect.gen(function* () {
    const db = yield* ProductDbService;
    // ============================================
    // Fetches the full list of products
    // ============================================
    function getProducts() {
      return db.getAll().pipe(
        Effect.flatMap((rows) =>
          Schema.decodeUnknownEffect(productListSchema)(rows),
        ),
        Effect.catchTag("SchemaError", (error) =>
          Effect.fail(
            new ProductsInvalidResponseError({ cause: error.message }),
          ),
        ),
      );
    }

    // ============================================
    // Fetches a single product by its ID
    // ============================================
    function getProductById(id: number) {
      return db.getById(id).pipe(
        Effect.flatMap(
          (
            row,
          ): Effect.Effect<
            Product,
            ProductNotFoundError | Schema.SchemaError
          > =>
            row === null
              ? Effect.fail(new ProductNotFoundError())
              : Schema.decodeUnknownEffect(productSchema)(row),
        ),
        Effect.catchTag("SchemaError", (error) =>
          Effect.fail(
            new ProductInvalidResponseError({ cause: error.message }),
          ),
        ),
      );
    }

    return { getProducts, getProductById };
  }),
);
