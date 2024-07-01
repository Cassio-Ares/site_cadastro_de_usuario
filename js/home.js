window.addEventListener("load", () => {
  if (localStorage.getItem("User") || localStorage.getItem("User")) {

    let user = localStorage.getItem("User") ? localStorage.getItem("User") : sessionStorage.getItem("User");

    user = JSON.parse(user);

    document.getElementById("userName").innerHTML = user.name;
  } else {

  location.href = '/login.html';
  }



  document.getElementById("user").addEventListener("click", () => {
    localStorage.removeItem("User");
    sessionStorage.removeItem("User")

    location.href = '/login.html';
  });
});
