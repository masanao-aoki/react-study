var $ = require('jquery');
var is = require('is_js');

console.log(is);

$(function(){
	console.log("app");
});

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

arr1.push(...arr2);

console.log(arr1); // [0, 1, 2, 3, 4, 5]