function hide() {
  document.querySelectorAll("legend")[0] = "ðContact Detailsð";

  //   Username
  var username = document.createElement("legend");
  username.innerHTML = `Username ${
    document.querySelectorAll("input")[0].value
  }`;
  document.querySelector(".form-container").appendChild(username);

  //   Email
  var email = document.createElement("legend");
  email.innerHTML = `Email: ${document.querySelectorAll("input")[1].value}`;
  document.querySelector(".form-container").appendChild(email);

  //   Comment
  var comment = document.createElement("legend");
  comment.innerHTML = `Comment: ${document.querySelector("textarea").value}`;
  document.querySelector(".form-container").appendChild(comment);

  //   ! DO NOT EDIT BELOW THIS LINE â
  for (let i = 0; i < document.querySelectorAll("input").length; i++) {
    document.querySelectorAll("input")[i].style.display = "none";
  }

  for (let i = 0; i < document.querySelectorAll("label").length; i++) {
    document.querySelectorAll("label")[i].style.display = "none";
  }

  for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].style.display = "none";
  }
  document.querySelector("textarea").style.display = "none";
}
// function clears the form
function clear() {
  for (let i = 0; i < document.querySelectorAll("input").length; i++) {
    document.querySelectorAll("input")[i].value = "";
  }
  document.querySelectorAll("textarea").value = ""; // clear textarea
}
