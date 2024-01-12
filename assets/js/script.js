var back = document.getElementById("back");
var download = document.getElementById("download");
var close = document.getElementById("close");
var app1Btn = document.getElementById("app1Btn");
var app1BtnDesk = document.getElementById("app1BtnDesk");
var download1 = document.getElementsByClassName("download1");
var download2 = document.getElementsByClassName("download2");
console.dir(download1)



console.dir(back)
//back.style.display = "block";
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
download.addEventListener("click", openModal);
app1Btn.addEventListener("click", openModal);
app1BtnDesk.addEventListener("click", openModal);
download1.addEventListener("click", openModal)
download2.addEventListener("click", openModal)
close.addEventListener("click", closeModal);


