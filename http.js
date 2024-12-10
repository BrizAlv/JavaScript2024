// verbos HTTP: GET: Se utiliza para recuperar datos de un recurso específico. Es el método más utilizado y no modifica el estado del servidor.
// POST: Se utiliza para enviar datos a un servidor para crear o actualizar un recurso.
// PUT: Se utiliza para actualizar un recurso existente, reemplazando su contenido por completo.
// PATCH: Se utiliza para actualizar un recurso existente, modificando solo los datos especificados.
// DELETE: Se utiliza para eliminar un recurso del servidor.

fetch ("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => console.log(data));

