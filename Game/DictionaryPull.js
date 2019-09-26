let wordList = [];
let levelLength = 5;
let dictionary;

function setLevelLength(length) {
	levelLength = length;
}

function pullWordArray(level) {
	wordList = [];
	
	// The JSON.parse(JSON.stringify)) is to force JavaScript to make a deep copy instead of assigning by reference
	let words = JSON.parse(JSON.stringify(dictionary[level]));
	
	for(let length = levelLength; length > 0; length--) {
		let index = Math.floor(Math.random() * words.length);
		wordList.push(words.splice(index, 1));
	}
	
	return wordList;
}

function pullWord() {
	if(wordList.length == 0) {
		levelUp();
	} else {
		setWord(wordList.pop());
	}
}

function LoadFile() {
		let oFrame = document.getElementById("frmFile");
		let strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
		dictionary = JSON.parse(strRawContents);
}
