$('h1').each(function() { replace($(this)); });
$('h2').each(function() { replace($(this)); });
$('h3').each(function() { replace($(this)); });
$('h4').each(function() { replace($(this)); });
$('h5').each(function() { replace($(this)); });
$('h6').each(function() { replace($(this)); });
$('p').each(function() { replace($(this)); });
$('li').each(function() { replace($(this)); });

function replace(elem) {
	var textReplace = elem.html();
	var lettersToReplace = [
		"a", "A",
		"i", "I",
		"o", "O",
		"u", "U",
		"w", "W",
		"z", "Z",
		"od", "Od",
		"iż",
		"ds.",
		"na", "Na",
		"po", "Po",
		"za", "Za",
		"do", "Do",
		"nie", "Nie",
		"pod", "Pod",
		"zł",
		"np. w", "np.", 
		"ale",
		"jak"
	];
	var arrayLength = lettersToReplace.length;
	for (var i = 0; i < arrayLength; i++) {
		var textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
		var textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
	}
	elem.empty();
	elem.html(textReplace);
};