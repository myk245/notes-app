const modal = document.getElementById("modal");
const modalOpenButton = document.getElementById("add-button");
const modalCloseButton = document.getElementById("close");

modalOpenButton.onclick = function () {
   modal.style.display = "block";
}

modalCloseButton.onclick = function () {
   modal.style.display = "none";
}

// if user clicks outside of modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}