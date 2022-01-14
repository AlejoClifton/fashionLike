PRUEBAS

--'/prueba/nuevo-usuario' // POST - se le manda un usuario por body
// -------- { nombre: 'ejemplo' }

--'/prueba/ver-usuarios' // GET - ver usuarios
// -------- { _id, nombre }

USUARIOS

--'/signup' // POST - registrar un nuevo usuario
// -------- { email: 'ejemplo1', password: 'ejemplo2' }

--'/login' // POST - inicio de sesión del usuario
// -------- { email: 'ejemplo1', password: 'ejemplo2' }

--'/users' // GET - ver la lista de usuarios registrados
// -------- { _id, email, nombre }


POSTS

--'/post/mostrar' // GET - ver posts subidos
// -------- [ {...}, {...}, {...}]

--'/post/nuevo' // POST - subir un nuevo post
// -------- { de momento el servidor no espera ningún dato específico }