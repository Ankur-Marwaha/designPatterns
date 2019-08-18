require(["helper/firstModule", "jquery"], function(firstModule, jquery) {
  alert("index.js");
  alert(firstModule + "asdf");
  if (jquery) {
    alert("jquery is defined");
  }
});
