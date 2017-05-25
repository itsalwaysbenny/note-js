(function(exports) {
  function Note(newnote) {
    this.message = newnote;
    // this.user = 'Bailey';
    // this.timestamp = 'Thursday';
  };

  exports.Note = Note;
})(this);

// this will create a new note which is stored in message

Note.prototype.printMessage = function() {
  return this.message;
};

// this allows printing of just message part of note
