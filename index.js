function playMash(){
	
	// Intialize Categories
	let homeTypes = ['Mansion', 'Apartment', 'Shack', 'House'];
	// Get user input - Type of Cars (5)
	// Get user input - Potential Spouses (6)
	// Get user input - Cities (7)
	// Get user input - Occupations (8)
	// Get user input - Children (9)

	//Determine homeType - random num

	//Determine cars - random num
}

function randomInt(minimumNum, maximumNum){
	return Math.floor(Math.random() * (maximumNum - minimumNum + 1)) + minimumNum;
}

function getUserInputAsArray(message, numberOfItems){
	let outputArray = [];
	let tryCounter = 1;
	let promptMessage = message;
	
	do {
		outputArray = prompt(promptMessage).split(";");
		if(outputArray.length === numberOfItems){
			return outputArray;
		}
		tryCounter++
		promptMessage = "ATTEMPT " + tryCounter.toString() + "\n\n" + message +  "\n\nBe sure to enter each item separated by a semi-colon, 'item1; item2; item3'."
	} while (tryCounter < 4)
	return [];
}

function trimArrayStrings(array){
	for(let i = 0; i < array.length; i++){
		if(typeof array[i] === "string"){
			array[i] = trim(array[i]);
		}
	}
}

