/* selectors */
const questionContent = document.getElementById("question-content")
const opationOne = document.getElementById('opation-one')
const opationTwo = document.getElementById('opation-two')
const opationThree = document.getElementById('opation-three')
const opationFour = document.getElementById('opation-four')
const nextButton = document.getElementById('next-btn')
const answerButtonsElement = document.getElementById('opat')
const questionNumber = document.getElementById('question-number')
let result = ''

// questions content for test only
const questions = [
    {
        number: 0,
        question: "What is 1 + 1 ?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        rightAnswer: "2"
    },
    {
        number: 1,
        question: "What is 2 + 2 ?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        rightAnswer: "4",
    },
    {
        number: 2,
        question: "What is 3 + 3 ?",
        options: [
            "6",
            "7",
            "9",
            "8"
        ],
        rightAnswer: "6",
    },
    {
        number: 3,
        question: "What is 4 + 4 ?",
        options: [
            "8",
            "9",
            "10",
            "11"
        ],
        rightAnswer: "8",
    },
    {
        number: 4,
        question: "What is 5 + 5 ?",
        options: [
            "10",
            "11",
            "12",
            "13"
        ],
        rightAnswer: "10",
    },
    {
        number: 5,
        question: "What is 6 + 6 ?",
        options: [
            "12",
            "13",
            "14",
            "15"
        ],
        rightAnswer: "12",
    },
    {
        number: 6,
        question: "What is 7 + 7 ?",
        options: [
            "14",
            "15",
            "16",
            "17"
        ],
        rightAnswer: "14",
    },
    {
        number: 7,
        question: "What is 8 + 8 ?",
        options: [
            "16",
            "17",
            "18",
            "19"
        ],
        rightAnswer: "16",
    },
    {
        number: 8,
        question: "What is 9 + 9 ?",
        options: [
            "18",
            "19",
            "20",
            "21"
        ],
        rightAnswer: "18",
    },
    {
        number: 9,
        question: "What is 10 + 10 ?",
        options: [
            "20",
            "21",
            "22",
            "23"
        ],
        rightAnswer: "20",
    }
]

/***********************************************************************************/

nextButton.addEventListener('click', function (e) {
    e.preventDefault()
    setNextQuestion()
})

/***********************************************************************************/

// function selected choice 
let choiceId;
function reply_click() {
    // event.target is the element that is clicked (button in this case).
    console.log(questions[counter].question)
    choiceId = event.target.id;
    selchoice = document.getElementById(choiceId)
    result = selchoice.value
    console.log('result : ' + result);
}


// function check Result with right answer 
let score = 0
function checkResult(count, selectedChoice) {
    if (result == questions[count].rightAnswer) {
        document.getElementById('sepeator-one').classList.add("correct")
        return ++score;
    } else {
        document.getElementById('sepeator-one').classList.add("wrong")
    }
}


function checkResultQuestion9(count, selectedChoice) {
    if (result == questions[count].rightAnswer) {
        ++counter
        return ++score;
    }
}

// function set  next quesion and record score 
let counter = 0
function setNextQuestion() {
    if (counter < 9) {
        checkResult(counter, result)
        ++counter
        questionContent.textContent = questions[counter].question;
        opationOne.value = questions[counter].options[0];
        opationTwo.value = questions[counter].options[1];
        opationThree.value = questions[counter].options[2];
        opationFour.value = questions[counter].options[3];
        questionNumber.innerText = counter + 1
        console.log('score : ' + score)
    } else if (counter == 9) {
        checkResultQuestion9(counter, result)
        console.log('score : ' + score)
    } else {
        console.log('score : ' + score)
    }
}