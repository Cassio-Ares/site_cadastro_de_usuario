window.addEventListener("load", () => {
  if (localStorage.getItem("User") || localStorage.getItem("User")) {

    let user = localStorage.getItem("User") ? localStorage.getItem("User") : sessionStorage.getItem("User");

    user = JSON.parse(user);

    document.getElementById("userName").innerHTML = user.name;
  } else {

  location.href = '/login.html';
  }
});
