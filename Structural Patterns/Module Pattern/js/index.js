define("index", ["helper/firstModule", "jquery"], function(
  firstModule,
  jquery
) {
  //the following doesn't get defined as a module
  //require(["helper/firstModule", "jquery"], function(firstModule, jquery) {
  alert("index.js");
  firstModule.firstMethod();
  if (jquery) {
    alert("jquery is defined");
  }
  return 4;
});
