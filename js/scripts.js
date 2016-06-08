// business logic
var transfer = function(word){

  var result = word.toLowerCase();
  for(var i=0; i<word.length; i++){
    if(word.charAt(0)==="q" && word.charAt(1)==="u"){
      return word.slice(2) + word.slice(0,2) + "ay";
    }
    else if(result.charAt(i)==="a" || result.charAt(i)==="e" || result.charAt(i)==="i" || result.charAt(i)==="o" || result.charAt(i)==="u"){
      return word + "ay";
    }
    else{
      word = word.split("");
      word.push(word.shift());
      word = word.join("");
    }
  }
}

var breaking = function(sentence){
  var words = sentence.match(/\b(\w+)\b/g);
  return words.map(function(word){
    return transfer(word);
  }).join(" ");
}
// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    var result = breaking(words);

    $(".output").text(result);
    $("#result").show();
  });
});
