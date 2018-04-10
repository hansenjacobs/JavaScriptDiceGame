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

function getUserInputAsArray(message, numberOfItems, itemTypeExpected = "string"){
	let inputValid = false;
	let outputArray = [];
	
	do {
		outputArray = prompt(message).split(", ");
		if(outputArray.length === numberOfItems){
			if(checkArrayElementsType(itemTypeExpected)){
				inputValid = true;
				}
			}
		}

	} while (//input not valid)
}