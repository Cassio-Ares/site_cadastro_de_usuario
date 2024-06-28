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
          alert(`olá ${response.name}`);
        });
      }
    });
  });
});


