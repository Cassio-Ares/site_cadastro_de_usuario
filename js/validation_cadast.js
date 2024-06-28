window.addEventListener("load", () => {
  document.getElementById("submit").addEventListener("click", (event) => {
   event.preventDefault();

    const name = document.querySelector("input[name= name]").value;
    const secund_name = document.querySelector(
      "input[name= secund_name]"
    ).value;
    const email = document.querySelector("input[name= email]").value;
    const telephone = document.querySelector("input[name= telephone]").value;
    const password = document.querySelector("input[name= password]").value;
    const password_confirmation = document.querySelector(
      "input[name= password_confirmation]"
    ).value;
    const address = document.querySelector("input[name= address]").value;
    const cep = document.querySelector("input[name= cep]").value;

    const telReg = /^(\+\d{1,3})?[- .]?\(?\d{2,3}\)?[- .]?\d{3,4}[- .]?\d{4}$/;
    const cepReg = /^\d{5}-\d{3}$/;

    const lowerCaseReg = /[a-z]/;
    const upperCaseReg = /[A-Z]/;
    const numberReg = /[0-9]/;

    if (name.length === 0) {
      alert("O nome é obrigatorio");
    } else if (secund_name.length === 0) {
      alert("O sobrenome é obrigatorio");
    } else if (email.length === 0 || email.indexOf("@") === -1) {
      alert("Verifique se preencheu o e-mail corretamente");
    } else if (telephone.length === 0 || !telephone.match(telReg)) {
      alert("Verifique se o seu telefone esta correto");
    } else if (
      password.length === 0 ||
      !password.match(lowerCaseReg) ||
      !password.match(upperCaseReg) ||
      !password.match(numberReg)
    ) {
      alert(
        "Verifique a sua senha ela deve conter letras maiusculas e minusculas e numeros para ser mais segura"
      );
    } else if (password_confirmation != password) {
      alert("As senhas devem ser iguais.");
    } else if (address.length === 0) {
      alert("Endereçe é obrigatório");
    } else if (!cep.match(cepReg)) {
      alert("Verifique se seu cep esta correto");
    } else {
      alert("ok");
    }
  });
});
