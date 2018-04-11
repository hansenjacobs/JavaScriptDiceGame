function playMash(){
	
	// Intialize Categories
	let storyInputs = {}
	storyInputs.homeTypes = ['Mansion', 'Apartment', 'Shack', 'House'];
	storyInputs.cars = getUserInputAsArray("Enter five car types/styles separated by semi-colons (;):", 5);
	storyInputs.spouses = getUserInputAsArray("Enter the name of six different people separated by semi-colons (;):", 6);
	storyInputs.locations = getUserInputAsArray("Enter seven different cities/locations separated by semi-colons (;):", 7);
	storyInputs.occupations = getUserInputAsArray("Enter eight different occupations separated by semi-colons (;):", 8);
	storyInputs.childrenNumbers = getUserInputAsArray("Enter nine different numnbers separated by semi-colons (;):", 9);

	let storyResults = determineStoryResults(storyInputs);

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

function determineStoryResults(storyInputs){
	let storyResults = {};

	storyResults.home = storyInputs.homeTypes[randomInt(0, 3)];
	storyResults.car = storyInputs.cars[randomInt(0, 4)];
	storyResults.spouse = storyInputs.spouses[randomInt(0, 5)];
	storyResults.location = storyInputs.locations[randomInt(0, 6)];
	storyResults.occupation = storyInputs.occupations[randomInt(0, 7)];
	storyResults.childrenCount = storyInputs.childrenNumbers[randomInt(0, 8)];

	return storyResults;
}

function determineChildren(){

	let childNameList = generateChildNameList();
	let childrenCount = randomInt(0, 10);
	let children = [];
	

	for(let i = 0; i < childrenCount; i++){
		children.push(childNameList[randomInt(0, childNameList.length - 1)]);
		childNameList.splice(childNameList.indexOf(children[i]), 1);
	}
}

function generateChildNameList(){
	
	let childNameList = ["Elvin","Hans","Jules","Edwardo","Jan","Nicky","Abe","Buddy","Jamie","Kasey","Vito","Ambrose","Wilmer","Rickey","Wyatt","Jake","Devin","Eduardo","Ned","Winford","Stephen","Gaston","Bernie","Isaiah","Bob","Emile","Rudolf","Elbert","Rodger","Jon","Isaac","Gil","Brice","Isiah","Renato","Travis","Bryant","Carol","Pablo","Bruce","Danial","Sonny","Gail","Junior","Felix","Marcos","Hai","Kraig","Lewis","Kurt","Alicef","Callie","Carley","Mari","Tamar","Cynthia","Valene","Joslyn","Maritza","Vivien","Tamica","Sandi","Lilia","Alessandra","Elena","Shandra","Johanna","Emogene","Epifania","Victoria","Evette","Nita","Daina","Gwendolyn","Rebekah","Rubie","Karima","Tenesha","Kirstin","Laveta","Davida","Verdie","Earlene","Ghislaine","Jani","Maryann","Delora","Susy","Willa","Joanna","Deena","Sherlyn","Cecila","Elenore","Katherine","Ailene","Genevive","Sheron","Enid","Danae"];
	console.log(childNameList);
	childNameList = shuffleArray(childNameList);

	return childNameList;
}

function shuffleArray(array){
	for(let i = array.length - 1; i > 0; i--){
		let randomNumber = randomInt(0, i);
		let temporaryString = array[i]
		array[i] = array[randomNumber];
		array[randomNumber] = temporaryString;
	}
	return array;
}

function writeStory(storyResults){
	// determine storyline by random number

	// build story output

	// return story output
}

console.log(generateChildNameList());