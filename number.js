"use strict";
var num1 = 10;
// let num2:number=30 same global scope
var num2 = 30;
var num3 = "30";
var total = num1 + num2; //type inference
console.log(total);
var oct = 0o00001;
var hexa = 0b00001;
var binary = 0x00001;
var item = 100;
var item2 = "50";
var item2Converted = Number(item2);
var item2Converted2 = +item2;
console.log(item + +item2);
var data = 30;
data = "Deepanker";
console.log(data);
