import { HttpApi } from "effect/unstable/httpapi";

import { productsGroup } from "./product/endpoints.js";

export const ecomApi = HttpApi.make("ecomApi").add(productsGroup);
