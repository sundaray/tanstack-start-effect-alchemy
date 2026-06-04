import { Effect, Schema } from "effect";

// =============================================================================
// Products list errors
// =============================================================================

export class ProductsFetchError extends Schema.TaggedErrorClass<ProductsFetchError>()(
  "ProductsFetchError",
  {
    message: Schema.String.pipe(
      Schema.withConstructorDefault(
        Effect.succeed("Failed to fetch products. Please try again later."),
      ),
    ),
    cause: Schema.String,
  },
  { httpApiStatus: 503 },
) {}

export class ProductsInvalidResponseError extends Schema.TaggedErrorClass<ProductsInvalidResponseError>()(
  "ProductsInvalidResponseError",
  {
    message: Schema.String.pipe(
      Schema.withConstructorDefault(
        Effect.succeed("Invalid products response. Please try again later."),
      ),
    ),
    cause: Schema.String,
  },
  { httpApiStatus: 502 },
) {}

// =============================================================================
// Single product errors
// =============================================================================

export class ProductNotFoundError extends Schema.TaggedErrorClass<ProductNotFoundError>()(
  "ProductNotFoundError",
  {
    message: Schema.String.pipe(
      Schema.withConstructorDefault(
        Effect.succeed(
          "The product could not be found. Please try again later.",
        ),
      ),
    ),
  },
  { httpApiStatus: 404 },
) {}

export class ProductInvalidResponseError extends Schema.TaggedErrorClass<ProductInvalidResponseError>()(
  "ProductInvalidResponseError",
  {
    message: Schema.String.pipe(
      Schema.withConstructorDefault(
        Effect.succeed("Invalid product response. Please try again later."),
      ),
    ),
    cause: Schema.String,
  },
  { httpApiStatus: 502 },
) {}

export class ProductFetchError extends Schema.TaggedErrorClass<ProductFetchError>()(
  "ProductFetchError",
  {
    message: Schema.String.pipe(
      Schema.withConstructorDefault(
        Effect.succeed("Failed to fetch the product. Please try again later."),
      ),
    ),
    cause: Schema.String,
  },
  { httpApiStatus: 503 },
) {}
