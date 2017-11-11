
    // arguments for function below
    // "(3(){(3 a(){7{(3 b(2){9((''+(2/2)).5!==1||2%g===0){(3(){}).8('4')()}c{4}b(++2)})(0)}d(e){f(a,6)}})()})();",
    // 17,
    // 17,
    // ["", "", "i", "function", "debugger", "length", "5000", "try", "constructor", "if", "", "", "else", "catch", "", "setTimeout", "20"],
    // 0
    // {}
    eval(function(dataAndEvents, replacementHash, options, optionsCache, check, opt_attributes) {
    })

var check = function(str) {
        return str["toString"](replacementHash);
      };


var options = 17
var optionsCache = ["", "", "i", "function", "debugger", "length", "5000", "try", "constructor", "if", "", "", "else", "catch", "", "setTimeout", "20"],
    // 0
var opt_attributes = {}

for (;options--;) {
  opt_attributes[check(options)] = optionsCache[options] || check(options);
}
