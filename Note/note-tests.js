
(function(exports) {
  function testNote() {
  var note = new Note();
  assert.isTrue(note.message === "new note");
};

 testNote();
})(this);
