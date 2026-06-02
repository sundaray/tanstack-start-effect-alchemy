import { Schema } from "effect";

export const productSchema = Schema.Struct({
  id: Schema.Number,
  title: Schema.String,
  description: Schema.String,
  price: Schema.Number,
  category: Schema.String,
  brand: Schema.optionalKey(Schema.String),
});

export const productListSchema = Schema.Struct({
  products: Schema.Array(productSchema),
  total: Schema.Number,
  skip: Schema.Number,
  limit: Schema.Number,
});

export type Product = typeof productSchema.Type;
export type ProductList = typeof productListSchema.Type;
