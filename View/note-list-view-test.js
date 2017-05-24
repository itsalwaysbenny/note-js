(function(exports) {
  function testShowList() {
    var list = new List();
    list.addList("new note");
    var showlist = new ShowList();
    showlist.notelist = list;
      assert.isTrue(showlist.viewList() === "<ul><li><div>new note</div></li></ul>");

  };

  testShowList();
})(this);
