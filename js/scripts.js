// business logic
var transfer = function(word){
  // if(word.charAt(0)==="a"||word.charAt(0)==="e"||word.charAt(0)==="i"||word.charAt(0)==="o"||word.charAt(0)==="u"||word.charAt(0)==="A"||word.charAt(0)==="E"||word.charAt(0)==="I"||word.charAt(0)==="O"||word.charAt(0)==="U"){
  //   return word + "ay";
  // }
  //
  // else{
  //   word = word.split("");
  //   word.push(word.shift());
  //   return word.join("") + "ay";
  // }

  var result = word;
  for(var i=0; i<word.length; i++){
    if(word.charAt(i)==="a"||word.charAt(i)==="e"||word.charAt(i)==="i"||word.charAt(i)==="o"||word.charAt(i)==="u"||word.charAt(i)==="A"||word.charAt(i)==="E"||word.charAt(i)==="I"||word.charAt(i)==="O"||word.charAt(i)==="U"){
      return result + "ay";
    }
    else{
      result = result.split("");
      result.push(result.shift());
      result = result.join("");
    }
  }
}

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    var result = transfer(words);

    $(".output").text(result);
    $("#result").show();
  });
});
