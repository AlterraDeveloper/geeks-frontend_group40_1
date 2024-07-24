
const noteStorage = {
    key: "note-app-2",
    add(newNote){
        const notes = this.getAll();
        notes.push(newNote);
        this.save(notes);
    },
    update(id, text){
        const notes = this.getAll();
        const noteIndex = notes.findIndex(note => note.id === id);
        if(noteIndex === -1) return;
        notes[noteIndex].text = text;
        this.save(notes);
    },
    remove(id){
        const notes = this.getAll();
        const noteIndex = notes.findIndex(note => note.id === id);
        if(noteIndex === -1) return;
        notes.splice(noteIndex, 1);
        this.save(notes);
    },
    getAll(){
        const notesJson = localStorage.getItem(this.key);
        const notes = JSON.parse(notesJson ?? "[]");
        return notes;
    },
    save(notes){
        const notesJson = JSON.stringify(notes);
        localStorage.setItem(this.key, notesJson);
    }
}