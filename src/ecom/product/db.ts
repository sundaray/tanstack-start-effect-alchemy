import { Context, Effect, Layer } from "effect";
import { env } from "cloudflare:workers";
import { ProductsDbError, ProductDbError } from "./errors";

// Definition
export class ProductDbService extends Context.Service<
  "ProductDbService",
  {
    readonly getAll: () => Effect.Effect<unknown[], ProductsDbError>;
    readonly getById: (id: number) => Effect.Effect<unknown, ProductDbError>;
  }
>()("ProductDbService") {}

// Implementation
export const ProductDbServiceLive = Layer.sync(ProductDbService, () => ({
  getAll: () =>
    Effect.tryPromise({
      try: () =>
        env.DB.prepare("SELECT id, title FROM products ORDER BY id").all(),
      catch: (cause) => new ProductsDbError({ cause: String(cause) }),
    }).pipe(Effect.map((result) => result.results)),

  getById: (id) =>
    Effect.tryPromise({
      try: () =>
        env.DB.prepare("SEELCT id, title FROM products WHERE id = ?")
          .bind(id)
          .first(),
      catch: (cause) => new ProductDbError({ cause: String(cause) }),
    }),
}));
