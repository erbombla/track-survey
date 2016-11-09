// Business logic:
var result;

function epicodusForm(startup, company, front, back) {
debugger;
    if ( startup === '1' && front === '1' ) {
      result = "CSS and Design";
      return result;
    } else if ( company === '1' && back === '1' ){
      result = "C# and .NET";
      return result;
    } else if ( company === '2' || back === '2'){
      result = "Java and Android";
      return result;
    }
}

// User input:
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    debugger;
    event.preventDefault();
    var startup = $("input:radio[name=startup]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var front = $("input:radio[name=front]:checked").val();
    var back = $("input:radio[name=back]:checked").val();
    epicodusForm(startup, company, front, back);

    if (result === "C# and .NET") {
      $("#output3").hide();
      $("#output2").hide();
      $("#output1").show();
    } else if (result === "CSS and Design") {
      $("#output1").hide();
      $("#output2").hide();
      $("#output3").show();
    } else if (result === "Java and Android") {
      $("#output3").hide();
      $("#output1").hide();
      $("#output2").show();
    }
  });
});
