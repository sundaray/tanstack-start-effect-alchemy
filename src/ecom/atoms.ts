import { FetchHttpClient } from "effect/unstable/http";
import { AtomHttpApi } from "effect/unstable/reactivity";

import { ecomApi } from "./api";

export class EcomApiAtom extends AtomHttpApi.Service<EcomApiAtom>()(
  "EcomApiAtom",
  {
    api: ecomApi,
    httpClient: FetchHttpClient.layer,
  },
) {}

// GET /api/products
export const productsAtom = EcomApiAtom.query("products", "getProducts", {});
