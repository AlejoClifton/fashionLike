// COMANDOS EN LA TERMINAL
// cd backend
// npm init -y
// npm i express express-session mongodb passport passport-local bcrypt
// para encender el servidor, abrir la terminal --> cd backend --> cd server --> node index.js

console.log("servidor ENCENDIDO"); //simplemente para que se muestre en la terminal cuando se ha encendido el servidor

const express = require("express"); //utilizar el paquete express
const session = require("express-session"); //iniciar la sesión
const MongoClient = require("mongodb").MongoClient; //conectar con la base de datos
const passport = require("passport"); // mantener la sesión mientras se mueve por las páginas (passport + LocalStragety)
const LocalStrategy = require("passport-local").Strategy;

/* const bcrypt = require("bcrypt"); //encriptar las contraseñas
const cifrado = require("../rutas/cifrado"); //usamos cifrado.js para encriptar las contraseñas (todavía sin usar) */

const app = express();

const posts = require("../rutas/rutasPosts");
app.use("/post", posts);

const registro = require("../rutas/registros");
app.use("/registro", registro);

const verUsuarios = require("../rutas/mostrarUsuarios");
app.use("/ver", verUsuarios);

var db;

//--------CONEXIÓN A LA BASE DE DATOS (las rutas de prueba están al final)
MongoClient.connect(
  //-------los tres enlaces son pruebas de rutas para ver cuál conecta con la base de datos sin dar error
  /* "mongodb+srv://cluster0.c15y7.mongodb.net/yoiYvibLDIlYsrYn", */
  /* "mongodb+srv://OCuenca:yoiYvibLDIlYsrYn@cluster0.75jyv.mongodb.net/cluster0?retryWrites=true&w=majority", */
  "mongodb+srv://OCuenca:yoiYvibLDIlYsrYn@cluster0.c15y7.mongodb.net/passwordDatabase?retryWrites=true&w=majority", // ¡POR FIN! jajaj
  { useUnifiedTopology: true },
  (err, client) => {
    if (err !== undefined) {
      res.send(err);
      return;
    } else {
      app.locals.db = client.db("equipo62");
    }
  }
);

//-------------hasta el final, rutas para la SESIÓN del cliente
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  //llega la petición de inicio de sesión
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    db.collection("usuarios")
      .find({ email })
      .toArray(function (err, users) {
        if (users.length === 0) {
          //se compreuba se existe algún usuario
          return done(null, false);
        }
        const user = users[0];
        if (password === user.password) {
          //se comprueba si la contraseña es correcta
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
  })
);

passport.serializeUser(function (user, done) {
  //inicia la sesión
  done(null, user.email);
});
passport.deserializeUser(function (email, done) {
  //cierra la sesión
  db.collection("usuarios")
    .find({ email })
    .toArray(function (err, users) {
      if (users.length === 0) {
        done(null, null);
      }
      done(null, users[0]);
    });
});

app.use(function (req, res, next) {
  next();
}, express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post(
  "/signup",
  /* cifrado, */ function (req, res) {
    // CIFRADO --> descomentar cuando esté terminado
    //ruta para registrar usuarios
    let db = req.app.locals.db;

    let email = req.body.email;
    let password = req.body.password;

    db.collection("usuarios").insertOne({ email, password }, (err, info) => {
      if (err !== undefined) {
        res.send(err);
      } else {
        res.send(info);
      }
    });
  }
);

app.post(
  // ruta que solicita el inicio de sesión a Passport y recibe la respuesta
  "login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/fail",
  })
);
app.get("/api", (req, res) => {
  //si Passport comprueba que el inicio es correcto
  res.send({ user: req.user });
});
app.get("/api/fail", (req, res) => {
  //si el inicio de sesión no es correcto
  res.send("usuario o contraseña incorrecto");
});

app.get("/users", (req, res) => {
  //ruta para ver la lista de usuarios registrados
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

//---------------ESTAS DOS RUTAS SON DE PRUEBA PARA VER SI FUNCIONA EL CÓDIGO PARA CONECTAR CON LA BASE DE DATOS DE MONGODB
app.get("/prueba/ver-usuarios", (req, res) => {
  let db = req.app.locals.db;

  db.collection("prueba")
    .find()
    .toArray((err, info) => {
      if (err !== undefined) {
        res.send(err);
      } else {
        res.send(info);
      }
    });
});

app.post("/prueba/nuevo-usuario", (req, res) => {
  let db = req.app.locals.db;
  /* let nuevoUsuario = "prueba"; */ //---si queréis probar cómo funciona, usad esta línea
  let nuevoUsuario = req.body;

  db.collection("prueba").insertOne({ nuevoUsuario }, (err, info) => {
    if (err !== undefined) {
      res.send(err);
    } else {
      res.send(info);
    }
  });
});

app.listen(3001); //normalmente se usa el 3000, he puesto 3001 para que no coincida con React
