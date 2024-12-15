// 1 => First Program of calculating our age
var thisYear = 2024;
var birthYear = 2005;
var age = thisYear - birthYear;
console.log('This is My age:', age);
// 2 => second program of calculating Area of Rectangle
var length = 23;
var width = 89;
var areaOfrectangle = length * width;
console.log("This is the Area of Rectangle:", areaOfrectangle);
// 3 => Area of Circle
var pie = 3.14;
var radius = 12;
var areaOfcircle = pie * radius * radius;
console.log("This is the Area of the Circle", areaOfcircle);
// 4 => Area of the cube
var side = 10;
var areaofCube = 6 * side * side;
console.log('This is the Area of the Cube:', areaofCube);
// 5 => Calculation of Temprature
var temprature = 100;
var conversionType = 'FtoC';
var NewTeprature;
if (conversionType === 'FtoC') {
    NewTeprature = (temprature - 32) * 5 / 9;
    console.log("".concat(temprature, "\u00B0F is equal to ").concat(NewTeprature, "\u00B0C"));
}
else if (conversionType === "CtoF") {
    NewTeprature = (temprature * 9 / 5) + 32;
    console.log("".concat(temprature, "\u00B0C is equal to ").concat(NewTeprature, "\u00B0F"));
}
else {
    console.error('invalid conversion type');
}
// 6 => conversion of seconds into minutes
var second = 180;
var minutes = second / 60;
var hours = second / 360;
console.log('The minutes of our seconds are:', minutes);
console.log('The hours of our seconds are:', hours);
// 7 => calculation of the percentage
var obtainMarks = 978;
var totalMarks = 1100;
var percentage = obtainMarks / totalMarks * 100;
console.log("you have obtain ".concat(percentage, "% Marks"));
// 8 => pre increment 
var a = 2;
var b = ++a * 2;
console.log('This is the value of b', b);
// 9 => post decrement
var x = 5;
var y = x-- + 2;
console.log('This is the value of y', y);
// 10 => post and pre increment
var m = 3;
var n = ++m + m++ + ++m;
console.log('This is the value of m', m);
// 11 => post and pre increment
var o = 2;
var p = ++o * o++ * --o;
console.log('This is the value of O', o);
// 12 => post and pre increment
var ab = 3;
var bc = 5;
var result = ++ab + bc-- - ab++ + --bc;
console.log('This is the value of result', result);
// 12 => post and pre increment
var M = 2;
var N = 4;
var P = M++ + ++N - --M + N--;
console.log('This is the value of P', P);
// 13 => post and pre increment
var A = 5;
var B = 3;
var C = 2;
var D = 7;
var result78 = ++A * (B-- + C) / --D;
console.log('This is our result', result78);
// 14 =>post and pre increment
var Mm = 2;
var Nn = 3;
var Oo = 4;
var result100 = Mm++ * (--Nn + Mm) / (Oo-- - Nn);
console.log("The value of result100: ", result100);
