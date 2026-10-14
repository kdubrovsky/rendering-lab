import path from 'node:path';
import express from 'express';
import { App } from './App.js';
import { renderToString } from 'react-dom/server';

import type { Product } from '@rendering-lab/contracts';

const app = express();
const port = 3001;
const API_URL = process.env.API_URL ?? 'http://localhost:4000';

const distPath = path.join(import.meta.dirname, '../dist');

app.use('/assets', express.static(distPath));

app.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  const fetchUrl = `${API_URL}/products/${encodeURIComponent(id)}`;

  const response = await fetch(fetchUrl);
  if (response.status === 404) {
    res
      .status(404)
      .send(
        `<!doctype html><html><head><meta charset="utf-8"></head><body><div id="root"><h1>Product not found</h1></div></body></html>`,
      );
    return;
  }
  if (!response.ok) throw new Error(`API responded ${response.status}`);

  const product = (await response.json()) as Product;

  res.send(
    `<!doctype html><html><head><meta charset="utf-8"></head><body><div id="root">${renderToString(<App product={product} />)}</div></body></html>`,
  );
});

app.listen(port, () => {
  console.log(`Express started @ ${port} port`);
});
