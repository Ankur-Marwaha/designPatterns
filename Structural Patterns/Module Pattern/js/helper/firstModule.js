define("helper/firstModule", [], function(mnc, startup) {
  alert("code in firstModule.js");
  //return "return from firstModule.js";

  var firstModule = {};
  firstModule.firstMethod = function() {
    alert("first method of first module is called");
  };
  return firstModule;
});
