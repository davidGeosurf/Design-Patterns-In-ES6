/*
	Generally speaking, if you try to hide something complex from users,
	make access simple and dummy-friendly, then you are doing Facade.

	The usual appearance of Facade in JavaScript world is polyfill, which
	hides problems like the browser compability from the public.
*/

"use strict";

function appendString(source, string) {
	if (source instanceof Array) {
		return source.map(function (ele) {
			return ele + string;
		});
	} else if (typeof source === "string" || source instanceof String) {
		return source + string;
	}
}

var a = appendString(["This", "is", "an", "array"], " cat");
var b = appendString("This is a string", ", or is it?");

console.log(a);
console.log(b);