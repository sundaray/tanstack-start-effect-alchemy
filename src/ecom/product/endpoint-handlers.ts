import { Effect } from "effect";
import { HttpApiBuilder } from "effect/unstable/httpapi";

import { ecomApi } from "../api.js";
import { ProductService } from "./service.js";

export const productsGroupLayer = HttpApiBuilder.group(
  ecomApi,
  "products",
  (handlers) =>
    Effect.gen(function* () {
      const products = yield* ProductService;

      return handlers
        .handle("getProducts", () => products.getProducts())
        .handle("getProductById", (ctx) =>
          products.getProductById(ctx.params.id),
        );
    }),
);
