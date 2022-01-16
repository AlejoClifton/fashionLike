const express = require("express");
const router = express.Router();

router.get("/usuarios", (req, res) => {
  let db = req.app.locals.db;

  db.collection("usuarios")
    .find()
    .toArray((err, data) => {
      if (err !== undefined) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
});

router.get("/modelos", (req, res) => {
  let db = req.app.locals.db;

  db.collection("modelos")
    .find()
    .toArray((err, data) => {
      if (err !== undefined) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
});

router.get("/marcas", (req, res) => {
  let db = req.app.locals.db;

  db.collection("marcas")
    .find()
    .toArray((err, data) => {
      if (err !== undefined) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
});

module.exports = router;
