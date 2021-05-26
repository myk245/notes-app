// grab existing HTML elements
const modal = document.getElementById('modal');
const modalOpenButton = document.getElementById('add-button');
const modalCloseButton = document.getElementById('close');
const submitButton = document.getElementById('submit-button');
const noteForm = document.getElementById('form');
const noteInput = document.querySelector('.input');
const notesContainer = document.getElementById('notes-container');
const editModal = document.getElementById('edit-modal');
const editInput = document.querySelector('.edit-input');
const editModalCloseButton = document.getElementById('edit-close');

loadEventListeners = () => {
   noteForm.addEventListener('submit', addNote);
   notesContainer.addEventListener('click', removeNote);
   notesContainer.addEventListener('click', editNote);
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

editModalCloseButton.addEventListener('click', () => {
   editModal.style.display = 'none';
})

// if user clicks outside of edit modal, close it
window.addEventListener('click', (event) => {
   if (event.target == editModal) {
      editModal.style.display = 'none';
   }
})

addNote = (event) => {
   event.preventDefault();

   // prevent user from saving an empty note
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

// opens the edit note modal with the note text
editNote = (event) => {
   if (event.target.className === 'edit-button') {
      editModal.style.display = 'block';
      // populate text area with note text
      editInput.value = event.target.parentElement.firstChild.textContent;  
   }
}

loadEventListeners();