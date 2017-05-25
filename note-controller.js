function changeText(text) {
  var appDiv = document.getElementById('app');
  appDiv.innerHTML = text;

  return {
    changeText: changeText,
  }
};
