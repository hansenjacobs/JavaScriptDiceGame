function playMash(){
	
	let storyInputs = {}
	
	storyInputs.homeTypes = ['mansion', 'apartment', 'shack', 'house'];
	
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
	
	let output = "<h1>Your Life Story</h1>";

	switch(randomInt(1, 3)){
		case 1:
			output += `
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
			if(storyResults.children.length !== 1){
				output += `
							<p>What a life you have lived!  
							You had ${storyResults.children.length} children ${(storyResults.children.length > 0 ? "- " + storyResults.children.join(", ") + " -" : "")} 
							with your partner, ${storyResults.spouse}, despite not being married.
						`;
			} else {
				output += `
							<p>What a life you have lived!  
							You had ${storyResults.children.length} child - ${storyResults.children[0]} - 
							with your partner, ${storyResults.spouse}, despite not being married.
						`;
			}

			output += `
					All of you happily live in a small ${storyResults.home} in ${storyResults.location}. </p>
					<p>As you don't make much money at your ${storyResults.occupation} job, you are forced to drive a ${storyResults.car}. 
					You may not have the biggest home or the best car, but you and your family lived happily ever after.</p>
					
					`;
			break;

		case 3:  // Fallthrough
		default:
			output += `
					<p>You have lived the American dream.  After finishing college, you got a job as a ${storyResults.occupation}.  Shortly thereafter,
					you got married to your soul mate, ${storyResults.spouse}.  While planning your wedding with 300 guests, you and ${storyResults.spouse}
					 were also busy moving into your first place, a cozy ${storyResults.home} in ${storyResults.location}.</p>
					`;
			if(storyResults.children.length > 1){
				output += `
						<p>After a few years of wedded bliss, you started having children.  You raised ${storyResults.children.length} children - 
						${storyResults.children.join(", ")}.  All of whom turned out to be great people with amazing families of their own.
						`;
			} else if(storyResults.children.length === 1){
				output += `
						<p>After a few years of wedded bliss, you started having children.  You raised ${storyResults.children.length} child - 
						${storyResults.children[0].toString()}. While ${storyResults.children[0].toString()} was a spoiled only child, still turned out
						to be a great person.  What more can a parent ask for?</p>
						`;
			} else {
				output += `
						<p>After a few years of wedded bliss, you considered having children.  However, you and ${storyResults.spouse} decided that
						children weren't right for your lifestyle - you can take a lot of trip with the money saved!</p>
						`;
			}

			output += `
						<p>During your mid-life crisis, you decided you needed to buy your dream vehicle, a ${storyResults.car}. </p>
						<h4>The end</h4>
					`;

	}

	return output;
}

playMash();