import path from 'node:path';
import express from 'express';
import { renderToString } from 'react-dom/server';
import type { Product } from '@rendering-lab/contracts';
import { App } from './App.js';
import { renderPage } from './html.js';

const app = express();
const port = 3001;
const API_URL = process.env.API_URL ?? 'http://localhost:4000';

app.use('/assets', express.static(path.join(import.meta.dirname, '../dist')));
app.use('/static', express.static(path.join(import.meta.dirname, '../public')));

app.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  const fetchUrl = `${API_URL}/products/${encodeURIComponent(id)}`;

  const response = await fetch(fetchUrl);
  if (response.status === 404) {
    res.status(404).send(
      renderPage({
        title: 'Product not found',
        body: '<main class="page not-found"><h1>Product not found</h1></main>',
      }),
    );
    return;
  }
  if (!response.ok) throw new Error(`API responded ${response.status}`);

  const product = (await response.json()) as Product;

  res.send(
    renderPage({
      title: product.title,
      body: `<div id="root">${renderToString(<App product={product} />)}</div>`,
    }),
  );
});

app.listen(port, () => {
  console.log(`Express started @ ${port} port`);
});
