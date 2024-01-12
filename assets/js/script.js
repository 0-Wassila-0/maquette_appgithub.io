// Références des éléments HTML
var back = document.getElementById("back");
var close = document.getElementById("close");
//bouton pour ouvrir la modale app4Btn //
var download = document.getElementById("download");
var close = document.getElementById("close");
var app1BtnDesk = document.getElementById("app1")
var app1Btn = document.getElementById("app1Btn")
var app4Btn = document.getElementsByClassName("app4Btn")
console.dir(app4Btn);

console.dir(back);

//back.style.display = "block"; //
// Fonction de fermeture de la modale
function closeModal() {
  // Cache le modal à l'aide de CSS  
  // Réinitialise les variables
  back.style.display = "none";
}

// Fonction de déploiement de la modale
function openModal() {
  // Affiche le modal à l'aide de CSS
  // Réinitialise les variables
  back.style.display = "block";

}
download.addEventListener("click",openModal);
close.addEventListener("click",closeModal);

//action pour download 2 //
download.addEventListener("click",openModal);
app1BtnDesk.addEventListener("click",openModal);
app1Btn.addEventListener("click",openModal);
app4Btn[0].addEventListener("click",openModal);
app4Btn[1].addEventListener("click",openModal);
close.addEventListener("click",closeModal);


