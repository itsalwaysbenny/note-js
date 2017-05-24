(function(exports) {
  function testAddList() {
    var note = new Note();
    var list = new List();
    list.addList("new note");
    assert.isTrue(list.array[0] === "new note" );
  };

  testAddList();
})(this);
