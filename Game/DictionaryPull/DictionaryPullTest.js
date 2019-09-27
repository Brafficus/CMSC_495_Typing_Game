let words;

function pullWords() {
	words = pullWordArray(document.getElementById("level").value);
	document.getElementById("words").value = words.join("\n");
}

function pullSingleWord() {
	document.getElementById("singleWord").value = words.pop();
	document.getElementById("words").value = words.join("\n");
	
	if(words.length <= 0) {
		pullWords();
	}
}