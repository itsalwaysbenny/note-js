(function(exports) {
  function ShowList(notelist) {
    this.notelist = notelist;
  };
  exports.ShowList = ShowList;
})(this);

ShowList.prototype.viewList = function() {
  for (var i = 0; i < this.notelist.array.length; i++) {
    return ("<ul><li><div>" + this.notelist.array[i] + "</div></li></ul>");
  };
};
