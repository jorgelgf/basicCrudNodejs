const express = require("express");

const server = express();
//para que  o express entenda que recebe json, é necessário abaixo:
server.use(express.json());

const cursos = ["NodeJS", "ReactJS", "Native"];
// //exemplo query params - http://localhost:3000/curso?nome=Javascript
// server.get("/curso", (req, res) => {
//   const nome = req.query.nome;
//   return res.send({ curso: `Aprendendo ${nome}` });
// });

// //exemplo  Route params - http://localhost:3000/curso/1
// server.get("/curso/:id", (req, res) => {
//   const id = req.params.id;
//   return res.send({ curso: `Aprendendo ${id}` });
// });

//Retornando todos os cursos
server.get("/cursos", (req, res) => {
  return res.send(cursos);
});

//Retornando um curso específico
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;
  return res.send(cursos[index]);
});

//Criando cursos
server.post("/cursos/", (req, res) => {
  //recebe um nome na body
  const { name } = req.body;
  //adc ao fim do array cursos
  cursos.push(name);
  return res.json(cursos);
});

//Atualizando dados
server.put("/cursos/:index", (req, res) => {
  //pegando o valor que será substituído
  const { index } = req.params;
  //obtendo o nome novo enviado
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

//Deletando curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  //deletando apenas um item
  cursos.splice(index, 1);
  return res.json(cursos);
});
//ouvindo na porta 30000
server.listen(3000);
