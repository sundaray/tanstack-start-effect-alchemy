import { Schema } from "effect";

export const productSchema = Schema.Struct({
  id: Schema.Number,
  title: Schema.String,
});

export const productListSchema = Schema.Array(productSchema);

// DummyJSON returns the list wrapped: { products: [...], total, skip, limit }.
// We only care about the `products` array; excess fields are ignored on decode.
export const productsResponseSchema = Schema.Struct({
  products: productListSchema,
});

export type Product = typeof productSchema.Type;
export type ProductList = typeof productListSchema.Type;
