import { Schema } from "effect";
import { HttpApiEndpoint, HttpApiGroup } from "effect/unstable/httpapi";

import {
  ProductDbError,
  ProductInvalidResponseError,
  ProductNotFoundError,
  ProductsDbError,
  ProductsInvalidResponseError,
} from "./errors";
import { productListSchema, productSchema } from "./schemas";

// Define endpoints
// GET /products
export const productsEndpoint = HttpApiEndpoint.get("getProducts", "/", {
  success: productListSchema,
  error: [ProductsDbError, ProductsInvalidResponseError],
});

// GET /products/:id
export const productByIdEndpoint = HttpApiEndpoint.get(
  "getProductById",
  "/:id",
  {
    params: { id: Schema.FiniteFromString },
    success: productSchema,
    error: [ProductNotFoundError, ProductInvalidResponseError, ProductDbError],
  },
);

// Add endpoints to a group
export const productsGroup = HttpApiGroup.make("products")
  .add(productsEndpoint)
  .add(productByIdEndpoint)
  .prefix("/api/products");
