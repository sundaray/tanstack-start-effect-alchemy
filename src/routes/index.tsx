import { createFileRoute } from "@tanstack/react-router";
import { useAtomValue } from "@effect/atom-react";
import { AsyncResult } from "effect/unstable/reactivity";

import { productsAtom } from "../ecom/atoms";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const result = useAtomValue(productsAtom);

  return AsyncResult.builder(result)
    .onInitialOrWaiting(() => <p>Loading...</p>)
    .onError((error) => <p>Error: {error.message}</p>)
    .onSuccess(({ products }) => (
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    ))
    .render();
}
