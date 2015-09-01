// Multiple ways to reverse a string

var test = "abcdefg";
var test1 = "reverse this sentence";

function reverse1(str) {
	// Use native method
	// O(n) + O(n/2) + O(n)
	return str.split('').reverse().join('');
}

function reverse2(test) {
	// Reverse string using two pointers
	// O(n/2)
	if (!test || test.length === 0) return;

	var chars = test.split('');

	var i = 0;
	var j = chars.length - 1;

	while(i < j) {
		var tmp = chars[i];
		chars[i] = chars[j];
		chars[j] = tmp;
		i++;
		j--;
	}

	return chars.join('');
}

function reverse3(test) {
	// Reverse string going backwards
	// O(n)
	if (!test || test.length === 0) return;

	var chars = test.split('');

	var reverse = [];
	for (var i = chars.length - 1, min = 0; i >= min; i--) {
		reverse.push(chars[i]);
	}

	return reverse.join('');
}

reverse1(test);