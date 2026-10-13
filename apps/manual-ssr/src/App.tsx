import { useState } from 'react';

export function App({ id }: { id: string }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Product {id}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Add to cart ({counter})
      </button>
    </>
  );
}
