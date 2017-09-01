// VARIABLES
var query = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var questions = [];
var q1;
var q2;
var q3;
var q4;
var q5;
//=====================================================
// user interface inquirer
query
	.prompt([
		{
			type: 'list',
			message: 'Which type of flashcard do you prefer?',
			choices: ['Basic', 'Cloze'],
			name: 'type'
		}
	])
	.then(function(typeResponse) {
		if (typeResponse.type === 'Basic') {
			basic();
		} else if (typeResponse.type === 'Cloze') {
			cloze();
		}
	})

//=====================================================
// FUNCTIONS

// for basic flashcards
function basic() {
	q1 = new BasicCard('Who was the first President of the United States?', 'George Washington');
	// push to array so for loop will work
	questions.push(q1);

		// inquirer
		query.prompt([
			{
				type: 'input',
				message: q1.front,
				name: ]]]
			}
		])
		.then(function(answer) {
			if (answer.answer[i] === q[i].back) {
				console.log("Correct!\n" + q[i].back);
			} else {
				console.log("Bzzzzt! Wrong!\n" + q[i].back);
			}
		})
	}
}

// for cloze flashcards