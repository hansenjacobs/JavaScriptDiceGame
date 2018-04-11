function playMash(){
	
	let storyInputs = {}
	
	storyInputs.homeTypes = ['Mansion', 'Apartment', 'Shack', 'House'];
	
	storyInputs.cars = getUserInputAsArray("Enter five car types/styles separated by semi-colons (;):", 5);
	if(storyInputs.cars === null) {return}
	
	storyInputs.spouses = getUserInputAsArray("Enter the name of six different people separated by semi-colons (;):", 6);
	if(storyInputs.spouses === null) {return}
	
	storyInputs.locations = getUserInputAsArray("Enter seven different cities/locations separated by semi-colons (;):", 7);
	if(storyInputs.locations === null) {return}

	storyInputs.occupations = getUserInputAsArray("Enter eight different occupations separated by semi-colons (;):", 8);	
	if(storyInputs.occupations === null) {return}

	let storyResults = determineStoryResults(storyInputs);

	document.getElementById("story").innerHTML = writeStory(storyResults);
}

function randomInt(minimumNum, maximumNum){
	return Math.floor(Math.random() * (maximumNum - minimumNum + 1)) + minimumNum;
}

function getUserInputAsArray(message, numberOfItems){
	let outputArray = [];
	let tryCounter = 1;
	let promptMessage = message;
	
	do {

		let inputString = prompt(promptMessage);
			
			if(inputString === null){return null}

			while(inputString.charAt(inputString.length - 1) === ";") {
				inputString = inputString.substr(0, inputString.length - 1);
			}
			outputArray = inputString.split(";")

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
	storyResults.children = determineChildren();

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

	return children;
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
	
	let output = "";

	switch(randomInt(1, 1)){
		case 1:
			output += `
						<h1>Your Life Story</h1>
						<p>Congratulations on your fantastic life! You married the love of your life, ${storyResults.spouse}.
						The two of you settled in ${storyResults.location} to raise the family you always dreamed of in your roomy, expensive ${storyResults.home}.
					`;
			if(storyResults.children.length > 1){
				output += `
							Because of your happy marriage, you raised ${storyResults.children.length} chidlren - ${storyResults.children.join(", ")}. 
							However, despite your love for them, you raised some evil, evil children. 
							Your oldest, ${storyResults.children[0]}, is currently serving life in prison for murder.  
							And ${storyResults.children[1]} has joined the terrorist group ISIS and has not been heard from since.
						`;
			} else if(storyResults.children.length ===1){
				output += `
							Because of your happy marriage, you raised one child - ${storyResults.children[0].toString()}.
							However, despite your love for ${storyResults.children[0].toString()}, you raised an evil, evil child.
							${storyResults.children[0].toString()} is wanted for murder of ${randomInt(4, 80)} people.  Currently, ${storyResults.children[0]}
							has eluded the authorities, but it is only a matter of time before ${storyResults.children[0]} is captured and found guilty.
						`;
			} else {
				output += `
							Despite your happy and loving marriage, you and ${storyResults.spouse} never reared any children.  This is probably for the best,
							they would have been evil anyway. </p>
						`;
			}
			output += `
						<p>You stay at your ${storyResults.occupation} job, even though your boss is a total dick and you hate the work.  
						It pays for your ${storyResults.home} and your beat-up ${storyResults.car}.</p>
						
					`;
			output += `<h4>Do you believe the saying, 'Lucky in love, lucky in life'?  </h4>`;
			break;

		case 2:

			break;

		case 3:  // Fallthrough
		default:

	}

	return output;
}

playMash();