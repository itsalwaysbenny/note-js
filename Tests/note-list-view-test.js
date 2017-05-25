(function(exports) {
  function testShowList() {
    var list = new List();
    list.addNote("new note");
    var showlist = new ShowList(list);
      assert.isTrue(showlist.createHTML() === "<ul><li><div>new note</div></li></ul>")
  };

  testShowList();
})(this);
