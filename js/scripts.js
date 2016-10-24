// User input:
$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
  $("form#survey").submit(function(event) {
    event.preventDefault();
      var company = $("input:radio[name=company]:checked").val();

// Business logic:
var survey = function(){
  if ( company === 'option1' ) {
    return( "#output1" ); // C# and .NET
  }
  else if ( company === 'option2' ) {
    return( "output2" ); // Java and Android
  }
  if else ( company === 'option3' ) {
    return( "output3" ); // CSS and Design
  }
  else {
    alert( "Please select something" );
  }
};

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

//var size = $("input:radio[name=size]:checked").val();

//var build = $("input:radio[name=build]:checked").val(); //Build Radio

//Checkboxes off

//Drop-down off
