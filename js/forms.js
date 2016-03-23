$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var noun1Input = $("input#noun1").val();
    var adjective1Input = $("input#adjective1").val();
    var adjective2Input = $("input#adjective2").val();
    var verb1Input = $("input#verb1").val();
    var verb2Input = $("input#verb2").val();
    var animalPluralInput = $("input#animalPlural").val();
    var celebrityInput = $("input#celebrity").val();
    var placeInput = $("input#place").val();


    $(".person1").text(person1Input);
    $(".noun1").text(noun1Input);
    $(".adjective1").text(adjective1Input);
    $(".adjective2").text(adjective2Input);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".animalPlural").text(animalPluralInput);
    $(".celebrity").text(celebrityInput);
    $(".place").text(placeInput);

    $("#story").show();

    event.preventDefault();
  });
});
