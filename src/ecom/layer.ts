import { Layer } from "effect";
import { HttpApiBuilder } from "effect/unstable/httpapi";

import { ecomApi } from "./api.js";

import { productsGroupLayer } from "./product/endpoint-handlers.js";
import { ProductServiceLive } from "./product/service.js";

export const ecomApiLayer = HttpApiBuilder.layer(ecomApi).pipe(
  Layer.provide(productsGroupLayer),
  Layer.provide(ProductServiceLive),
);

