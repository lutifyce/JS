"use strict";

let obj = {
	'1a': 1, /* кавычки обязательны */
	'b2': 2,
	'c-c': 3,  /* кавычки обязательны */
	'd 4': 4,  /* кавычки обязательны */
	'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);