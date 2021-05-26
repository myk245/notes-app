// grab existing HTML elements
const modal = document.getElementById('modal');
const modalOpenButton = document.getElementById('add-button');
const modalCloseButton = document.getElementById('close');
const submitButton = document.getElementById('submit-button');
const noteForm = document.getElementById('form');
const noteInput = document.querySelector('.input');
const notesContainer = document.getElementById('notes-container');

loadEventListeners = () => {
   noteForm.addEventListener('submit', addNote);
   notesContainer.addEventListener('click', removeNote);
}

// Event Listeners
modalOpenButton.addEventListener('click', () => {
   modal.style.display = 'block';
})

modalCloseButton.addEventListener('click', () => {
   modal.style.display = 'none';
}) 
   
// if user clicks outside of modal, close it
window.addEventListener('click', (event) => {
   if (event.target == modal) {
      modal.style.display = 'none';
   }
}) 

addNote = (event) => {
   event.preventDefault();
   
   if (noteInput.value === '') {
      alert('You can\'t save an empty note.')
   } else {
      const note = document.createElement('div');
      note.className = 'note-object';
      note.appendChild(document.createTextNode(noteInput.value));

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button';
      deleteButton.innerText = 'Delete';
      note.appendChild(deleteButton);

      const editButton = document.createElement('button');
      editButton.className = 'edit-button';
      editButton.innerText = 'Edit';
      note.appendChild(editButton);

      notesContainer.appendChild(note);

      // clear notes field 
      noteInput.value = '';
      // close modal
      modal.style.display = 'none';

      alert("Note added!");
   }
}

// event listener will be on the notes container
removeNote = (event) => {
   if (event.target.className === 'delete-button') {
      if (confirm('Are you sure you want to delete this note?')) {
         event.target.parentElement.remove();
      }
   }
}

loadEventListeners();