// 1 => First Program of calculating our age
let thisYear = 2024;
let birthYear= 2005;
let age = thisYear - birthYear;
console.log('This is My age:',age);

// 2 => second program of calculating Area of Rectangle
let length = 23;
let width = 89;
let areaOfrectangle = length*width;
console.log("This is the Area of Rectangle:",areaOfrectangle);

// 3 => Area of Circle
let pie = 3.14;
let radius = 12;
let areaOfcircle = pie*radius*radius;
console.log("This is the Area of the Circle",areaOfcircle);

// 4 => Area of the cube
let side = 10;
let areaofCube = 6*side*side;
console.log('This is the Area of the Cube:',areaofCube);

// 5 => Calculation of Temprature
let temprature = 100;
let conversionType = 'FtoC';
let NewTeprature;
if(conversionType === 'FtoC'){
    NewTeprature = (temprature-32)*5/9;
    console.log(`${temprature}°F is equal to ${NewTeprature}°C`);
}
else if(conversionType === "CtoF"){
    NewTeprature = (temprature*9/5)+32;
    console.log(`${temprature}°C is equal to ${NewTeprature}°F`); 
}
else{
    console.error('invalid conversion type');  
}

// 6 => conversion of seconds into minutes
let second = 180;
let minutes = second/60;
let hours = second/360;
console.log('The minutes of our seconds are:', minutes);
console.log('The hours of our seconds are:',hours);

// 7 => calculation of the percentage
let obtainMarks = 978;
let totalMarks = 1100;
let percentage = obtainMarks/totalMarks*100;
console.log(`you have obtain ${percentage}% Marks`);

// 8 => pre increment 
let a = 2;
let b = ++a * 2; 
console.log('This is the value of b',b);

// 9 => post decrement
let x = 5;
let y = x-- + 2;
console.log('This is the value of y',y);

// 10 => post and pre increment
let m= 3;
let n = ++m + m++ + ++m;
console.log('This is the value of m',m);

// 11 => post and pre increment
let o = 2;
let p = ++o * o++ * --o;
console.log('This is the value of O',o);

// 12 => post and pre increment
let ab = 3;
let bc = 5;
let result = ++ab + bc-- - ab++ + --bc;
console.log('This is the value of result',result);

// 12 => post and pre increment
let M = 2;
let N = 4;
let P = M++ + ++N - --M + N--;
console.log('This is the value of P',P);

// 13 => post and pre increment
let A = 5;
let B = 3;
let C = 2;
let D = 7;

let result78 = ++A * (B-- + C) / --D;
console.log('This is our result',result78);

// 14 =>post and pre increment
let Mm = 2;
let Nn = 3;
let Oo = 4;
let result100 = Mm++ * (--Nn + Mm) / (Oo-- - Nn);
console.log("The value of result100: ", result100);








