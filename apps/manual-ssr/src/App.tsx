import { useState } from 'react';

import type { Product } from '@rendering-lab/contracts';

export function App({ product }: { product: Product }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{product.title}</h1>
      <small>id: {product.id}</small>
      <p>{product.description}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Add to cart ({counter})
      </button>
    </>
  );
}
