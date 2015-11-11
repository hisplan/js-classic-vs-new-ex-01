function f_classic() {
  var scripts = document.querySelectorAll("script"),
    i;
  var list = [];
  for (i = 0; i < scripts.length; i++) {
    if (scripts[i].src != "") {
      list.push(scripts[i].src);
    }
  }
  return list;
}

function f_es5_v1() {
  return Array.prototype.filter.call(document.querySelectorAll("script"),
      function(script) {
        return script.src != "";
      }
    )
    .map(function(script) {
      return script.src;
    });
}

function f_es5_v2() {
  return list = Array.prototype.map.call(document.querySelectorAll("script"),
    function(script) {
      if (script.src != "") return script.src;
    }
  );
}

function f_es6() {
  return list = Array.from(document.querySelectorAll("script"))
    .filter(script => script.src != "")
    .map(script => script.src);
}
