var popupoverlay = document.querySelector(".popupoverlay");
var popup = document.querySelector(".popup");

function pop() {
  popupoverlay.style.display = "block";
  popup.style.display = "block";
}

function popclose() {
  popupoverlay.style.display = "none";
  popup.style.display = "none";
}

var inputtitle = document.getElementById("input-title");
var inputtext = document.getElementById("input-text");
var notescontainer = document.querySelector(".notes-container");

var save = document.querySelector(".save-btn");

save.addEventListener("click", function () {
  popupoverlay.style.display = "none";
  popup.style.display = "none";

  var div = document.createElement("div");
  div.setAttribute("class", "notes");

  div.innerHTML = `<h1>${inputtitle.value}</h1>
                   <h5>${inputtext.value}</h5>
                   <button onclick="del(event)">Delete</button>`;

  notescontainer.append(div);

  inputtitle.value = "";
  inputtext.value = "";
});

function del(event) {
  event.target.parentElement.remove();
}
