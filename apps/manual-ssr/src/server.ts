import express from "express";

const app = express();
const port = 3001;

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  res.send(
    `<!doctype html><html><head><meta charset="utf-8"></head><body><h1>Product ${id}</h1></body></html>`,
  );
});

app.listen(port, () => {
  console.log(`Express started @ ${port} port`);
});
