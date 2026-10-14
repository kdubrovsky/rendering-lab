import { useState } from 'react';
import type { Product } from '@rendering-lab/contracts';

export function App({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <main className="page">
      <article className="product">
        <section className="gallery">
          <img
            className="gallery__main"
            src={product.images[activeImage]}
            alt={product.title}
            width={1200}
            height={800}
            fetchPriority="high"
          />
          <div className="gallery__thumbs">
            {product.images.map((src, index) => (
              <button
                key={src}
                type="button"
                className="gallery__thumb"
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeImage}
                onClick={() => setActiveImage(index)}
              >
                <img src={src} alt="" width={96} height={64} />
              </button>
            ))}
          </div>
        </section>

        <section className="product__info">
          <h1 className="product__title">{product.title}</h1>
          <small className="product__id">id: {product.id}</small>
          <p className="product__description">{product.description}</p>
          <button
            type="button"
            className="btn"
            onClick={() => setCounter((prev) => prev + 1)}
          >
            Add to cart ({counter})
          </button>
        </section>
      </article>
    </main>
  );
}
