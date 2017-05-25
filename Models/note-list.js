(function(exports) {
  function List() {
    this.noteStore = [];

  };

  exports.List = List;
})(this);

// creates a new list with an empty array (noteStore) to store notes

List.prototype.addNote = function(string) {
  var note = new Note(string);
  this.noteStore.push(note);
};

// adds note to noteStore, uses note model which allows the addition of extra info in the note

List.prototype.viewList = function() {
  return this.noteStore
};

// allows viewing of the list
