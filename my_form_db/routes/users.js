const express = require("express");
const router = express.Router();

const fs = require("fs");


router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/cadastro", (req, res) => {
  const { name, second_name, email, telephone, password, address, cep } = req.body;

  const file = fs.readFileSync("./database/database_form.json");


  //todo bcrypt
  // unique email
  
  // função que irá gerar ids aleatorios
  const gerarId = () => {
    return "_" + Math.random().toString(36).substring(2, 11);
  };

  const newId = gerarId();

  const object = JSON.parse(file);

  object.push({
    id: newId,
    name: name,
    second_name: second_name,
    email: email,
    telephone: telephone,
    password: password,
    address: address,
    cep: cep,
  });

  const data = JSON.stringify(object);

  fs.writeFileSync("./database/database_form.json", data)

  return res.send("Deu certo seu cadastrado.")

});

module.exports = router;
