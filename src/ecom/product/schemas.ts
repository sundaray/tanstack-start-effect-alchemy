import { Schema } from "effect";

export const productSchema = Schema.Struct({
  id: Schema.Number,
  title: Schema.String,
});

export const productListSchema = Schema.Array(productSchema);

export type Product = typeof productSchema.Type;
export type ProductList = typeof productListSchema.Type;
