import express from "express";
import { App } from "./App.js";
import { renderToString } from 'react-dom/server';

const app = express();
const port = 3001;

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.send(
    `<!doctype html><html><head><meta charset="utf-8"></head><body><div id="root">${renderToString(<App id={id} />)}</div></body></html>`,
  );
});

app.listen(port, () => {
  console.log(`Express started @ ${port} port`);
});
