//Deja's DICE GAME

function gameStart() {      //////////// creates the function that runs the game
				var inputName = prompt("What is your name?");       //prompt for name
				var firstCharacter = inputName.slice(0,1);			//gets first letter by itself to captalize
				var upperCasefirstCharacter = firstCharacter.toUpperCase(); //captalize first letter
				var restOfName = inputName.slice(1,inputName.length); 		//the rest of the user name
					alert("Welcome " + upperCasefirstCharacter + restOfName + " to my dice game! \r\n Are you feeling lucky? \r\n If it takes for you less than 40 rolls to spell out  \r\n Acorns you win!"); //then this will alert my message \r\n creates a line break in the alert
			}
				gameStart(); //runs this function, the name/welcome prompt part

function runGame() {
				var correctRoll = [4, 6, 8, 10, 12, 20]; //array for the dice even numbers that I want to relate to the letters
				var correctLetter = ["A", "C", "O", "R", "N", "S"]; //array for the letters that I want to relate to the numbers
				var diceOrder = [4, 6, 8, 10, 12, 20]; //how many times the dice need to roll the 4 dice needs to roll twice and the 20 needs to roll 4 times
				var rollCounter = 1; // starts the counter at 1
				
				for (let i = 0; i < correctRoll.length; i++) { /// starting at 0 then as long as trhat value is greater than correctroll it will countine to loop
					//above reads if 0 is less than the correctRoll.length. correctRoll.length is 

					while (rollDie(diceOrder[i]) !== correctRoll[i]) { 
					rollCounter++;
					}
					console.log(correctLetter[i]);
				}
				console.log(rollCounter);
			
					if (rollCounter < 40) {
						alert("It took you " + rollCounter + " rolls to spell out Acorns. \r\n Today is your lucky day!");
					} else {
						alert("It took you " + rollCounter + " rolls to spell out Acorns. \r\n Today is not you're lucky day, please try again!")
					}

					if(confirm("Would you like to try your luck?")){
						return runGame();
					}
					else{
						alert("Thanks for playing!");
					}
					}		

function rollDie(n) {
			var result = Math.ceil(Math.random() * n);
			console.log(result);
			return result;
					}

					runGame();
			
			






///////try to find out how to add a click function
//add the highest dice togethet take half and get at least half of the number then they win
//create button for each letter so the user isn't clicking a million times// while else  create Array





/*function rollDie(n) { 				//function to be able to plug in a number and roll that number 
				let result = Math.ceil(Math.random() * n);
				console.log(result);
				return result;
			}		
			  
			let firstRoll = rollDie(4); //outputs a random, each represent the die
				rollDie(6);
				rollDie(8);
				rollDie(10);
				rollDie(12);
				rollDie(20);
				rollDie(20);
				rollDie(20);
				rollDie(20);
				rollDie(20);*/

				//rollDie(4).toString();
				//console.log(rollDie(B).toString());

				//let randomNumber1 = rollDie(firstRoll); //same as above 
				//console.log(randomNumber1);

				//WE CAN DROP FUNCTIONS INSIDE A return
				//example
			/*function addTwoNumbers(num1, num2){
				return num1+ num2;
			}

			let answerTwo = addTwoNumbers(addTwoNumbers(30, 70), 30)
			console.log(answerTwo);*/

//let firstRollG = rollDie();

//let letterB = rollDie(4);

//let randomNumber1 = 6
//if/statement? i dont fucking know





			// all of the even numbers equal a letter
			// like i roll 3,1,10,6,4,7  4-sided 6-sided 8-sided 10-sided 12-sided 20 sided
			// must spell Breadstick then will alert how may rolls it took
			// 2 is an even number so you get B
			// 4 === R
			// 6 === E
			// 8 === A
			// 10 === D
			// 12 === S
			// 14 === T
			// 16 === I
			// 18 === C
			// 20 === K
			// first roll I get 1, 4, 3, 2, 7, 12, spells out B, R, S,  
			// 	roll again and get
			// 	4, 1, 3, 8, 7, 10, 20       	spells out B, R, A, D, S, K
			// 	then I got 
			// 	3, 6, 1, 10, 12, 14        	 	spells out B, R, E, A, D, S, T, K
			// 			roll again and get 
			// 			4, 3, 6, 4, 8, 16   	spells out B, R, E, A, D, S, I, T, K
			// 				roll again and get 
			// 				4, 3, 6, 6, 12, 18   spells out B, R, E, A, D, S, I, T, C, K
			// took 5 rolls winner yay!			



			// uses while loops if/else
	
			
			
			// spell out you won? its a six letter word 
			// so you roll the dice and each side/number equal a letter/character 
			// say 2 === Y 
			// 4 === O
			// 6 === U
			// 8 ===W
			// 10 === O
			// 12  ==N
			// so you keep rolling until you spell out "you won" 
			// then logs how many rolls it took you*/
