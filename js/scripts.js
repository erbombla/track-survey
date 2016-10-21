// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User input:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  	var number1 = parseInt($("#add1").val());
  	var number2 = parseInt($("#add2").val());
  	var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output3").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output4").text(result);
  });
});


// var input = prompt("enter in three numbers separated by a space to add.");
// 	var number1 = parseInt(input.charAt(0));
// 	var number2 = parseInt(input.charAt(2));
// 	var number3 = parseInt(input.charAt(4));
// var sum = function(firstnum, secondnum, thirdnum) {
// 	return firstnum + secondnum + thirdnum;
// };
// var result = sum(number1, number2, number3);
// alert(number1 + " + " + number2 + " + " + number3 + " = " + result);
//
// var input = prompt("enter in 2 numbers separated by a space to subtract.");
// var number1 = parseInt(input.charAt(0));
// var number2 = parseInt(input.charAt(2));
// var subtract = function(firstnum, secondnum) {
// 	return firstnum - secondnum;
// };
// var result = subtract(number1, number2);
// alert(number1 + " - " + number2 + " = " + result);
//
// var input = prompt("enter in three numbers separated by a space to multiply.");
// var number1 = parseInt(input.charAt(0));
// var number2 = parseInt(input.charAt(2));
// var number3 = parseInt(input.charAt(4));
// var multiply = function(firstnum, secondnum, thirdnum) {
// 	return firstnum * secondnum * thirdnum;
// };
// var result = multiply(number1, number2, number3);
// alert(number1 + " * " + number2 + " * " + number3 + " = " + result);
//
// var input = prompt("enter in 2 numbers separated by a space to divde.");
// var number1 = parseInt(input.charAt(0));
// var number2 = parseInt(input.charAt(2));
// var divide = function(firstnum, secondnum) {
// 	return firstnum / secondnum;
// };
// var result = divide(number1, number2);
// alert(number1 + " / " + number2 + " = " + result);
