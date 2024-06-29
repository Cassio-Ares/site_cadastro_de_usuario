window.addEventListener("load", () => {
  document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=password]").value;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => {
      if (response.status === 400) {
        response.text().then((response) => {
          alert(response);
        });
      } else {
        response.json().then((response) => {
          const storageData ={
            id: response.id,
            name: response.name
          }

          if(document.getElementById("lembre").checked){
            localStorage.setItem("User", JSON.stringify(storageData));
            //salva dados permanentamente no navegador (até que sejam limpos os caches )

           
          }else{
            sessionStorage.setItem("User", JSON.stringify(storageData));
            //salva dados no navegador enquanto o navagador esta aberto 
          }

          location.href = './home.html';
        });
      }
    });
  });
});


