
const $app = document.querySelector("#app");
const $btn = document.querySelector("#btn");

$btn.addEventListener("click", function(){

    const note = {
        id: Date.now(),
        text: ""
    };
    renderNote(note);
    noteStorage.add(note);
});

const notes = noteStorage.getAll();
for (const note of notes) {
    renderNote(note);
}

function renderNote(note){

    const $note = Note(note);
    $app.insertBefore($note, $btn);

    $note.addEventListener("dblclick", function(event){
        const userAgree = confirm("Are your sure to delete note?")
        if(userAgree){
            noteStorage.remove(event.target.id);
            event.target.remove();
        }
    })
}



/*
<textarea
    cols="30"
    rows="10"
    class="note"
    placeholder="Empty Note"
></textarea>
*/
function Note(note){
    const $note = document.createElement("textarea");
    $note.cols = "30";
    $note.rows = "10";
    $note.className = "note";
    $note.placeholder = "Empty Note";
    $note.id = note.id;
    $note.value = note.text;
    return $note;
}