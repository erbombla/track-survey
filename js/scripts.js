// Business logic:
  var company = $("input:radio[name=company]:checked").val();

  //var size = $("input:radio[name=size]:checked").val();

//var build = $("input:radio[name=build]:checked").val(); //Build Radio

//Checkboxes off

//Drop-down off

// User input:
$(document).ready(function() {
  //$('.dropdown-toggle').dropdown(); //activiates Drop-down 
  $("form").submit(function(event) {

    if ( company === 'option1' ) {
      $( "#output1" ).show(); // C# and .NET
    }
    else if ( company === 'option2' ) {
      $( "output2" ).show(); // Java and Android
    }
    else if ( company === 'option3' ) {
      $( "output3" ).show(); // CSS and Design
    }
    else {
      alert( "Please select something" );
    }

    //if ( size === 'option4' || 'option5') {
    //  $( "#output1" ).show(); // C# and .NET OR Java
    //}
    //else if ( size === 'option5' || 'option6' ) {
    //  $( "output2" ).show(); // Java and Android OR CSS
    //}
    //else if ( size === 'option6' ) {
    //  $( "output3" ).show(); // CSS and Design
    //}
    //  else {
    //  alert( "Please select something" );
    //}
    event.preventDefault();
  });
});
