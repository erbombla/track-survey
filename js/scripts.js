// Business logic:

// var company = $("input:radio[name=company]:checked").val(); //Company Radio

//var size = $("input:radio[name=size]:checked").val(); //Size Radio

//var build = $("input:radio[name=build]:checked").val(); //Build Radio

//Checkboxes off

//Drop-down off


// User input:
$(function() {
  $("form").submit(function(event) {
    var company = $("input:radio[name=company]:checked").val();

    if ( company1 === 'option1' ) {
      $( "#output1" ).show(); // C# and .NET
    }
    else if ( company2 === 'option2' ) {
      $( "output2" ).show(); // Java and Android
    }
    else if ( company3 === 'option 3' ) {
      $( "output3" ).show(); // CSS and Design
    }
    else {
      alert( "Please select something" );
    }
    event.preventDefault();
  });
});
