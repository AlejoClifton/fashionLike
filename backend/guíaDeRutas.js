PRUEBAS

--'/prueba/nuevo-usuario' // POST - se le manda un usuario por body
// datos requeridos --> { nombre: 'ejemplo' }

--'/prueba/ver-usuarios' // GET - ver usuarios
// info que devuelve --> [{ _id, nombre }, {...}, {...}]


NUEVOS-USUARIOS

--'/signup' // POST - registrar un nuevo usuario 
// datos requeridos --> { email: 'ejemplo1', password: 'ejemplo2' }

--'/registro/modelo' // POST - si el nuevo usuario es modelo, se añade a la colección modelos
// datos requeridos --> { nombre, apellido, usuario, telefono, email, contraseña, fechaNacimiento, pais}

--'/registro/marca' // POST - si el nuevo usuario es marca, se añade a la colección marcas
// datos requeridos --> { nombre, razonSocial, telefono, email, contraseña, pais, identificacionTrubutaria}


VER-USUARIOS

--'/ver/usuarios' // GET - ver todos los usuarios
// info que devuelve --> [{...}, {...}, {...}]

--'/ver/modelos' // GET - ver todos los modelos
// info que devuelve --> [{nombre, apellido, usuario, telefono, email, contraseña, fechaNacimiento, pais, rol, posts}, {...}, {...}]

--'/ver/usuarios' // GET - ver todos los usuarios
// info que devuelve --> [{nombre, razonSocial, telefono, email, contraseña, pais, identificacionTributaria, rol}, {...}, {...}]


SESIÓN

--'/login' // POST - inicio de sesión del usuario
// datos requeridos --> { email: 'ejemplo1', password: 'ejemplo2' }

--'/users' // GET - ver la lista de usuarios registrados
// info que devuelve --> [{ _id, email, nombre }, {...}, {...}]


POSTS

--'/post/mostrar' // GET - ver posts subidos
// info que devuelve --> [ {...}, {...}, {...}]

--'/post/nuevo' // POST - subir un nuevo post
// datos requeridos --> { de momento el servidor no espera ningún dato específico }