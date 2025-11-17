let datos = {
  programa: [
    {
      id: 1,
      titulo: "Aprende Pyton",
      tema: "Pyton",
      vista: 15000,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Aprende Pyton Intermedio",
      tema: "Pyton Intermedio",
      vista: 456321,
      nivel: "intermedio",
    },
    {
      id: 3,
      titulo: "Aprende Pyton Avanzado",
      tema: "Pyton Avanzado",
      vista: 1223,
      nivel: "avanzado",
    },
  ],
  matemaricas: [
    {
      id: 1,
      titulo: "Aprende Matematica 1",
      tema: "Matematica 1",
      vista: 15000,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Aprende Matematica 2",
      tema: "Matematica 2",
      vista: 54654,
      nivel: "intermedio",
    },
    {
      id: 3,
      titulo: "Aprende Matematica 3",
      tema: "Matematica 3",
      vista: 12315,
      nivel: "avanzado",
    },
  ],
};
let algebra = [];
let newdate = { ...datos, algebra };
let newdate2 = { ...datos, algebra: [] };
console.log(newdate);

// Excelente pregunta 👏
// Tienes toda la razón: en Node.js con Express, cuando trabajas con una API RESTful, se suelen usar distintos métodos HTTP según la acción que quieras realizar:
// Acción	Método HTTP	Descripción
// Obtener datos	GET	Consultar información (no modifica nada).
// Crear un nuevo recurso	POST	Enviar nuevos datos al servidor.
// Actualizar un recurso existente	PUT o PATCH	Modificar un recurso existente.
// Eliminar un recurso	DELETE	Borrar un recurso existente
// 🔹 Ejemplo práctico con tus datos y Express
// Supongamos que tienes un servidor Express básico:

/*const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());*/

/*let datos = {
  programa: [
    { id: 1, titulo: "Aprende Pyton", tema: "Pyton", vista: 15000, nivel: "basico" },
    { id: 2, titulo: "Aprende Pyton Intermedio", tema: "Pyton Intermedio", vista: 456321, nivel: "intermedio" },
    { id: 3, titulo: "Aprende Pyton Avanzado", tema: "Pyton Avanzado", vista: 1223, nivel: "avanzado" },
  ],
};

// 🔸 GET: obtener todos los programas
app.get("/programa", (req, res) => {
  res.json(datos.programa);
});

// 🔸 POST: agregar un nuevo programa
app.post("/programa", (req, res) => {
  const nuevo = req.body;
  datos.programa.push(nuevo);
  res.status(201).json({ mensaje: "Programa agregado", data: nuevo });
});

// 🔸 PUT: actualizar un programa por id
app.put("/programa/:id", (req, res) => {
  const { id } = req.params;
  const index = datos.programa.findIndex(p => p.id == id);
  
  if (index === -1) return res.status(404).json({ mensaje: "Programa no encontrado" });
  
  datos.programa[index] = { ...datos.programa[index], ...req.body };
  res.json({ mensaje: "Programa actualizado", data: datos.programa[index] });
});

// 🔸 DELETE: eliminar un programa por id
app.delete("/programa/:id", (req, res) => {
  const { id } = req.params;
  const index = datos.programa.findIndex(p => p.id == id);
  
  if (index === -1) return res.status(404).json({ mensaje: "Programa no encontrado" });
  
  const eliminado = datos.programa.splice(index, 1);
  res.json({ mensaje: "Programa eliminado", data: eliminado });
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));*/
