
(function(exports) {
  function testNote() {
  var note = new Note("new note");
  assert.isTrue(note.message === "new note");
};

 testNote();
})(this);
