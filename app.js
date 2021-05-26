// grab existing HTML elements
const modal = document.getElementById('modal');
const modalOpenButton = document.getElementById('add-button');
const modalCloseButton = document.getElementById('close');
const submitButton = document.getElementById('submit-button');
const noteForm = document.getElementById('form');
const noteInput = document.querySelector('.input');
const notesContainer = document.getElementById('notes-container');
const editModal = document.getElementById('edit-modal');
const editNoteForm = document.getElementById('edit-form');
const editInput = document.querySelector('.edit-input');
const editModalCloseButton = document.getElementById('edit-close');
const editSubmitButton = document.getElementById('edit-submit-button');

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
      note.addEventListener('click', selectNote);

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
   const noteToEdit = event.target.parentElement.firstChild;
   
   if (event.target.className === 'edit-button') {
      editModal.style.display = 'block';
      // populate text area with current note text
      editInput.value = noteToEdit.textContent;

      editSubmitButton.addEventListener('click', (event) => {
         event.preventDefault();
         
         noteToEdit.textContent = editInput.value;

         // hide edit modal 
         editModal.style.display = 'none';
      })
   }
}

selectNote = (event) => {
   console.log(event.target)
}

// credit to jfriend00's solution on Stack Overflow (https://stackoverflow.com/questions/10716986/swap-two-html-elements-and-preserve-event-listeners-on-them)
swapNotes = (note1, note2) => {
   // save the location of note2
   let parent2 = note2.parentNode;
   let next2 = note2.nextSibling;
   // special case for note1 is the next sibling of note2
   if (next2 === note1) {
      // just put note1 before note2
      parent2.insertBefore(note1, note2);
   } else {
      // insert note2 right before note1
      note1.parentNode.insertBefore(note2, note1);

      // now insert note1 where note2 was
      if (next2) {
         // if there was an element after obj2, then insert obj1 right before that
         parent2.insertBefore(note1, next2);
      } else {
         // otherwise, just append as last child
         parent2.appendChild(note1);
      }
   }
}

loadEventListeners();