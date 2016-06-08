// business logic
var transfer = function(word){
  if(word.charAt(0)==="a"||word.charAt(0)==="e"||word.charAt(0)==="i"||word.charAt(0)==="o"||word.charAt(0)==="u"||word.charAt(0)==="A"||word.charAt(0)==="E"||word.charAt(0)==="I"||word.charAt(0)==="O"||word.charAt(0)==="U"){
    return word + "ay";
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
