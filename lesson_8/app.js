// import noteStorage from "noteStorage.js";

const $app = document.querySelector("#app");
const $btn = document.querySelector("#btn");

// restore notes from local storage
// const notes = noteStorage.getAll();
// for(const note of notes){
//     renderNote(note);
// }

$btn.onclick = function () {
  const note = {
    id: Date.now(),
    text: "",
  };
  renderNote(note);
  noteStorage.add(note);
};

function renderNote(note) {
  const $note = Note(note);
  $app.insertBefore($note, $btn);

  $note.ondblclick = function (event) {
    const userAgree = confirm("Are you sure?");
    if (userAgree) {
        event.target.remove();
        noteStorage.remove(Number(event.target.id));
    }
  };

  $note.oninput = function(event){
    const noteId = Number(event.target.id);
    const noteText = event.target.value;
    noteStorage.update(noteId, noteText);
  }
}

/*
<textarea
    cols="30"
    rows="10"
    class="note"
    placeholder="Empty Note"
></textarea>
*/
function Note(note) {
  const $note = document.createElement("textarea");
  $note.cols = "30";
  $note.rows = "10";
  $note.className = "note";
  $note.placeholder = "Empty Note";
  $note.id = note.id;
  $note.value = note.text;
  return $note;
}
