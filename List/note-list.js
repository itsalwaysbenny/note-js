(function(exports) {
  function List() {
    this.array = [];
  };

  exports.List = List;
})(this);

List.prototype.addList = function(note) {
  this.array.push(note);
};

List.prototype.viewList = function() {
  return this.array
};
