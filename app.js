const modal = document.getElementById("modal");
const modalOpenButton = document.getElementById("add-button");
const modalCloseButton = document.getElementById("close");
const submitButton = document.getElementById("submit-button");
const noteInput = document.querySelector(".input");
const noteForm = document.getElementById("form");

loadEventListeners = () => {
   noteForm.addEventListener('submit', addNote);
}

// Event Listeners
modalOpenButton.addEventListener('click', () => {
   modal.style.display = "block";
})

modalCloseButton.addEventListener('click', () => {
   modal.style.display = "none";
}) 
   
// if user clicks outside of modal, close it
window.addEventListener('click', (event) => {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}) 

addNote = (event) => {
   event.preventDefault();

   if (noteInput.value === '') {
      alert('You can\'t save an empty note.')
   }

   console.log(noteInput.value)
   // alert("Note added!")

}

loadEventListeners();