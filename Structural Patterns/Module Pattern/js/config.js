requirejs.config({
  baseUrl: "js",
  paths: {
    jquery: ["https://code.jquery.com/jquery-3.4.1", "your local location"]
  }
});
// where ever you require angular in your code, require will first try to get it from cdn and if not
// available, then it would go for the local location.
