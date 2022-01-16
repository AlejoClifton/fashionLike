const express = require("express");
const router = express.Router();

router.post("/modelo", (req, res) => {
  //ruta de registro de MARCAS
  let db = req.app.locals.db;

  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let usuario = req.body.usuario;
  let telefono = req.body.telefono;
  let email = req.body.email;
  let contraseña = req.body.contraseña;
  let fechaNacimiento = req.body.fechaNacimiento;
  let pais = req.body.pais;
  let rol = modelo;
  let posts = [];

  let modelo = {
    nombre,
    apellido,
    usuario,
    telefono,
    email,
    contraseña,
    fechaNacimiento,
    pais,
    rol,
    posts,
  };

  db.collection("modelos").insertOne(modelo, (err, info) => {
    if (err !== undefined) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});

router.post("/marca", (req, res) => {
  //ruta de registro de MARCAS
  let db = req.app.locals.db;

  let nombre = req.body.nombre;
  let razonSocial = req.body.razonSocial;
  let telefono = req.body.telefono;
  let email = req.body.email;
  let contraseña = req.body.contraseña;
  let pais = req.body.pais;
  let identificacionTributaria = req.body.identificacionTributaria;
  let rol = marca;

  let marca = {
    nombre,
    razonSocial,
    telefono,
    email,
    contraseña,
    pais,
    identificacionTributaria,
    rol,
  };

  db.collection("marcas").insertOne(marca, (err, info) => {
    if (err !== undefined) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});

module.exports = router;
