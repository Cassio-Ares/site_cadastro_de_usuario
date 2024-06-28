const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const fs = require("fs");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/cadastro", (req, res) => {
  const { name, second_name, email, telephone, password, address, cep } = req.body;

  const file = fs.readFileSync("./database/database_form.json");

 //criptgrafia da senha 
 const criptPassword = bcrypt.hashSync(password, 10)

  const object = JSON.parse(file);

  // unique email
  const notUnic = object.find((data)=> data.email === email)

  if(notUnic){
    return res.status(404).send("E-mail já existe, aproveite e vá para pagina de login.")
  }
  
  // função que irá gerar ids aleatorios
  const gerarId = () => {
    return "_" + Math.random().toString(36).substring(2, 11);
  };

  const newId = gerarId();

  

  object.push({
    id: newId,
    name: name,
    second_name: second_name,
    email: email,
    telephone: telephone,
    password: criptPassword,
    address: address,
    cep: cep,
  });

  const data = JSON.stringify(object);

  fs.writeFileSync("./database/database_form.json", data)

  return res.send("Deu certo seu cadastrado.")

});

module.exports = router;
