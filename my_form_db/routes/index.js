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


router.post('/login', (req, res) => {
  const { email, password } =req.body;

  const file = fs.readFileSync("./database/database_form.json");

  const object = JSON.parse(file);

  const user = object.find((data)=> data.email === email);

  if(!user){
    return res.status(400).send("Email ou senha invalida");
  }
  else if(!bcrypt.compareSync(password, user.password)){
    return res.status(400).send("Email ou senha invalida");
  }
  else{
    return res.status(200).send(user)
  }
});


router.get('/events', (_, res)=>{
  const file = fs.readFileSync("./database/database_events.json")

  const object = JSON.parse(file);

  return res.status(200).send(object)
})


module.exports = router;
