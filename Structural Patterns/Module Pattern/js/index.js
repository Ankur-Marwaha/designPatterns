require(["helper/firstModule", "jquery"], function(firstModule, jquery) {
  alert("index.js");
  //alert(firstModule);
  firstModule.firstMethod();
  if (jquery) {
    alert("jquery is defined");
  }
});
