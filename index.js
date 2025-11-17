require("dotenv").config();
const express = require("express");
const app = express();
const { datos } = require("./data.js");
const PORT = process.env.PORT || 4000;
const fs = require("fs");
const path = require("path"); //fs y path sirven para escribir archivos
const { error } = require("console");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ruta = path.join(__dirname, "./data.js");

app.get("/dato", (req, res) => res.send(datos.programa)); // para pasar datos y se muesta en el link que quieras. darle .programa es para ver los datos del objeto que tenga dicho nombre podria poner .matematicas y daria la informacion del objeto de matematica
//podria usar res.json("",var) para que sea mas limpio
app.get("/", (req, res) => res.send("<h2>Hola Mundo, Servidor Abierto<h2>"));

app.post("/register/programa", (req, res) => {
  const newdate = req.body;
  if (!newdate) {
    return res.status(400).json({ error: "Error, no se recibieron datos" });
  }
  if (newdate.titulo && newdate.tema && newdate.vista && newdate.nivel) {
    const date = {
      id: datos.programa.length + 1,
      titulo: newdate.titulo,
      tema: newdate.tema,
      vista: newdate.vista,
      nivel: newdate.nivel,
    };
    datos.programa.push(date);
    //res.send(datos); Datos actualizados pero aun no escritos
    const newcontent = `const datos = ${JSON.stringify(datos, null, 2)};
                        module.exports = { datos };`;
    //Tener en cuenta que esto es el modelo exacto de tu archivo por eso se mantiene el module por que todo el archivo de guardato sera cambiado por este modelo por eso tener en cuenta que no estas agregando datos sino reemplazando totalmente todo
    fs.writeFile(ruta, newcontent, "utf-8", (error) => {
      if (error) {
        return res.status(500).json({ error: "error de escritura" });
      }
      return res
        .status(201)
        .json({ messaje: "Datos actualizados", datos: datos });
    });
    //res.send(datos.programa); //Para ver los datos cambniados
    //Anda bien solo evitar hacer 2 respuesta por que send normalmente es para get tener en cuenta que post es solo para enviar datos los get usan send para ver si los datos estas es mejor solo dejar comentario tipo status para ver si se cargaron bien o no los datos para verificar los cambio
  } else {
    return res
      .status(404)
      .json({ mensaje: "No se completaron todos los datos requeridos" });
  }
});
app.put("/register/programa/:id", (req, res) => {
  const userID = req.params.id;
  const index = datos.programa.findIndex((p) => p.id == userID); //busca la posicion en base al id dado
  if (index === -1)
    return res.status(404).json({ mensaje: "Programa no encontrado" }); //si no existe ese id en la base de datos este dara -1 por ende se rompe
  datos.programa[index] = { ...datos.programa[index], ...req.body };
  const newupdate = `const datos = ${JSON.stringify(
    datos,
    null,
    2
  )};module.exports = { datos };`;
  fs.writeFile(ruta, newupdate, (error) => {
    if (error) {
      return res.status(500).json({ error: "error de escritura" });
    }
    return res.status(201).json({
      mensaje: "Datos actualizados correctamente",
      actualizado: datos.programa,
    });
  });
});
app.delete("/delete/:id", (req, res) => {
  const findID = req.params.id;
  const newdato = datos.programa.filter((e) => e.id != findID);
  if (newdato.length === datos.programa.length) {
    return res.status(404).json({ mensaje: "Programa no encontrado" });
  }
  datos.programa = newdato;
  // guardar en archivo
  const newupdate = `const datos = ${JSON.stringify(
    datos,
    null,
    2
  )};module.exports = { datos };`;

  fs.writeFile(ruta, newupdate, (error) => {
    if (error) {
      return res.status(500).json({ error: "error de escritura" });
    }
    res.status(200).json({
      mensaje: "Programa borrado correctamente",
      programa: datos.programa,
    });
  });
});

app.listen(PORT, () => console.log(`Puerto en http://localhost:${PORT}`));
