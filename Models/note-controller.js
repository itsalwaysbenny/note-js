(function(exports) {
  function NoteController(list) {
    this.list = list;
  };
  exports.NoteController = NoteController;
})(this);


NoteController.prototype.viewList = function() {
  for (var i = 0; i < this.notelist.noteStore.length; i++) {
    return ("<ul><li><div>" + this.notelist.noteStore[i] + "</div></li></ul>");
  };
};
