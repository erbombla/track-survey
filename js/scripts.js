// User input:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

// Business logic:
  var company = $("input:radio[name=company]:checked").val();

    if ( company === 'option1' ) {
      $( "#output1" ).show(); // C# and .NET
    }
    else if ( company === 'option2' ) {
      $( "#output2" ).show(); // Java and Android
    }
    else if ( company === 'option3' ) {
      $( "#output3" ).show(); // CSS and Design
    }
    else {
      alert( "Please select something" );
    }
  });
});
