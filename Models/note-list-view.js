(function(exports) {
  function ShowList(list) {
    this.listArray = list.noteStore;

    ShowList.prototype.createHTML = function() {
      var returnArray = [];

      if (this.listArray.length === 0){
        return ""
      }

      else {
        for (var i = 0; i < this.listArray.length; i++) {
          returnArray.push(this.listArray[i].message)
        };

        var middle = returnArray.join('</div></li><li><div>');

        return "<ul><li><div>" + middle + "</div></li></ul>";
      };

      return {
        createHTML: createHTML,
      }
    }
  }
  exports.ShowList = ShowList
})(this);
//will show list with HTML tags
