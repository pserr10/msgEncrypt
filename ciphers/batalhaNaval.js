export class BatalhaNaval {
	constructor() {
		this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	}

	encrypt(str, key) {
		key = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		let firstArray = ["1"];
		let secondArray = ["2"];
		let thirdArray = ["3"];
		let forthArray = ["4"];
		let fifthArray = ["5"];
		let result=[];
		let alphabetForUse = [];
		let arrayIndex = ["A", "B", "C", "D", "E"];

		let keyIndex = this.alphabet.indexOf(key.toLowerCase());
		alphabetForUse = (this.alphabet.slice(keyIndex + 1).concat(this.alphabet.slice(0, keyIndex)));

		alphabetForUse.forEach(element => {
			if (firstArray.length < 6) {
				firstArray.push(element)
			} else if (secondArray.length < 6) {
				secondArray.push(element)
			} else if (thirdArray.length < 6) {
				thirdArray.push(element)
			} else if (forthArray.length < 6) {
				forthArray.push(element)
			} else if (fifthArray.length < 6) {
				fifthArray.push(element)
			}
		});

		for (let letter of str) {
			let indexLetter = this.alphabet.indexOf(letter.toLowerCase());
			if (indexLetter == "-1") {
				let spaceChar = " ";
				result.push(spaceChar);
			} else {
				if (firstArray.includes(letter.toLowerCase(), 1)) {
						result.push(arrayIndex[firstArray.indexOf(letter.toLowerCase()) - 1] + firstArray[0])
				} else if (secondArray.includes(letter.toLowerCase(), 1)) {
					result.push(arrayIndex[secondArray.indexOf(letter.toLowerCase()) - 1] + secondArray[0])
				} else if (thirdArray.includes(letter.toLowerCase(), 1)) {
					result.push(arrayIndex[thirdArray.indexOf(letter.toLowerCase()) - 1] + thirdArray[0])
				} else if (forthArray.includes(letter.toLowerCase(), 1)) {
					result.push(arrayIndex[forthArray.indexOf(letter.toLowerCase()) - 1] + forthArray[0])
				} else if (fifthArray.includes(letter.toLowerCase(), 1)) {
					result.push(arrayIndex[fifthArray.indexOf(letter.toLowerCase()) - 1] + fifthArray[0])
				}
			}
		}
	return result.join("");	
	}

	decrypt(str, key) {
		key = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		let firstArray = ["1"];
		let secondArray = ["2"];
		let thirdArray = ["3"];
		let forthArray = ["4"];
		let fifthArray = ["5"];
		let result=[];
		let alphabetForUse = [];
		let tempPos=[];
		let arrayIndex = ["A", "B", "C", "D", "E"];
		str = str.split("");

		let keyIndex = this.alphabet.indexOf(key.toLowerCase());
		alphabetForUse = (this.alphabet.slice(keyIndex + 1).concat(this.alphabet.slice(0, keyIndex)));

		alphabetForUse.forEach(element => {
			if (firstArray.length < 6) {
				firstArray.push(element)
			} else if (secondArray.length < 6) {
				secondArray.push(element)
			} else if (thirdArray.length < 6) {
				thirdArray.push(element)
			} else if (forthArray.length < 6) {
				forthArray.push(element)
			} else if (fifthArray.length < 6) {
				fifthArray.push(element)
			}
		});

		str.forEach(element => {	
			if (element == " "){
				result.push(element)
			} else {
				tempPos.push(element);
				if (tempPos.length == 2) {
					if (tempPos[1] == firstArray[0]) {
						result.push(firstArray[arrayIndex.indexOf(tempPos[0].toUpperCase()) + 1])
					}
					if (tempPos[1] == secondArray[0]) {
						result.push(secondArray[arrayIndex.indexOf(tempPos[0].toUpperCase()) + 1])
					}
					if (tempPos[1] == thirdArray[0]) {
						result.push(thirdArray[arrayIndex.indexOf(tempPos[0].toUpperCase()) + 1])
					}
					if (tempPos[1] == forthArray[0]) {
						result.push(forthArray[arrayIndex.indexOf(tempPos[0].toUpperCase()) + 1])
					}
					if (tempPos[1] == fifthArray[0]) {
						result.push(fifthArray[arrayIndex.indexOf(tempPos[0].toUpperCase()) + 1])
					}
					tempPos = [];
				}
			}
		});
		
	return result.join("");	
	}
}


