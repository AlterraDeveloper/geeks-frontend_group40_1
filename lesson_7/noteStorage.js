// JSON - JavaScript Object Notation

const noteStorage = {
  key: "note-app-2",

  add(note) {
    const notes = this.getAll();
    notes.push(note);
    this.save(notes);
  },
  remove(id) {
    const notes = this.getAll();
    const noteIndex = notes.findIndex(note => note.id === Number(id));
    if(noteIndex < 0) return;
    notes.splice(noteIndex, 1);
    this.save(notes);
  },
  getAll() {
    const notes = JSON.parse(localStorage.getItem(this.key) ?? "[]");
    return notes;
  },
  save(notes) {
    const notesJson = JSON.stringify(notes);
    localStorage.setItem(this.key, notesJson);
  },
};
