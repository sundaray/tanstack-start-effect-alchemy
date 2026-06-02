import { Layer } from "effect";
import { HttpRouter } from "effect/unstable/http";
import { NodeHttpServer } from "@effect/platform-node";
import { ecomApiLayer } from "./layer";

const appLayer = ecomApiLayer.pipe(
  Layer.provide(NodeHttpServer.layerHttpServices),
);

const webHandler = HttpRouter.toWebHandler(appLayer);

export const handler = webHandler.handler;
