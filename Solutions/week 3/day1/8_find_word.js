var wordCounted = 0

amountOfTimes = (node, word) => {

	if (node.nodeType === document.ELEMENT_NODE) {
		for (var i = 0; i < node.childNodes.length; i++) {
			amountOfTimes(node.childNodes[i], word)
		}
	}
	if (node.nodeType === document.TEXT_NODE) {

		var string = node.nodeValue
		var pos = string.indexOf(word)

		while (pos !== -1) {
			wordCounted++
			pos = string.indexOf(word, pos + 1)
		}
	}
}


console.log(amountOfTimes(document.body, 'word'))
//outputs 7

