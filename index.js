function playMash(){
	
	// Intialize Categories
	let homeTypes = ['Mansion', 'Apartment', 'Shack', 'House'];
	let cars = getUserInputAsArray("Enter five car types/styles separated by semi-colons (;):", 5);
	let spouses = getUserInputAsArray("Enter the name of six different people separated by semi-colons (;):", 6);
	let locations = getUserInputAsArray("Enter seven different cities/locations separated by semi-colons (;):", 7);
	let occupations = getUserInputAsArray("Enter eight different occupations separated by semi-colons (;):", 8);
	let childrenNumbers = getUserInputAsArray("Enter nine different numnbers separated by semi-colons (;):", 9);

	let storyResults = {};

	storyResults.home = homeTypes[randomInt(0, 3)];
	storyResults.car = cars[randomInt(0, 4)];
	storyResults.spouse = spouses[randomInt(0, 5)];
	storyResults.location = locations[randomInt(0, 6)];
	storyResults.occupation = occupations[randomInt(0, 7)];
	storyResults.childrenCount = childrenNumbers[randomInt(0, 8)];

	document.getElementById("story").innerHTML = "You will own a " + storyResults.home + " in " + storyResults.location + ". ";
	document.getElementById("story").innerHTML += "You will be unhappily married to " + storyResults.spouse + ", who happens to drive a " + storyResults.car + ". ";
	document.getElementById("story").innerHTML += "Before your marriage turned sour, you and " + storyResults.spouse + " had " + storyResults.childrenCount + ". ";
	document.getElementById("story").innerHTML += "Oh, and to top it all off, you just lost your " + storyResults.occupation + " job." + " Best of luck in your life!"
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
			outputArray = trimArrayStrings(outputArray);
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
			array[i] = array[i].trim();
		}
	}
	return array;
}

playMash();
