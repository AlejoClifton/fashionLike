const express = require("express");
const router = express.Router(); //con router podemos repartir todas las rutas de app para que no estén todas en el JS principal (index.js) y así organizar mejor el código. Al final, exportamos router para que se pueda recibir en el JS principal

router.get("/mostrar", (req, res) => {
  // mostrar TODOS los post
  let db = req.app.locals.db;

  db.collection("posts")
    .find()
    .toArray((err, data) => {
      if (err !== undefined) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
});

router.post("/nuevo", (req, res) => {
  let db = req.app.locals.db;

  let post = req.body;

  db.collection("posts").insertOne(post, (err, info) => {
    if (err !== undefined) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});

module.exports = router;
