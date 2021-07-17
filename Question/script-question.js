/* selectors */
const questionContent = document.getElementById("question-content");
const opationOne = document.getElementById("opation-one");
const opationTwo = document.getElementById("opation-two");
const opationThree = document.getElementById("opation-three");
const opationFour = document.getElementById("opation-four");
const nextButton = document.getElementById("next-btn");

const questionNumber = document.getElementById("question-number");
let result = "";

/***********************************************************************************/
// fetch api

const categoryEle = document.querySelector("#category");
categoryEle.addEventListener("change", (event) => {
    event.target.value;
    selectCategory();
});
function selectCategory() {
    let difficultyLocal = JSON.parse(localStorage.getItem("difficulty"));
    fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryEle.value
        }&difficulty=${difficultyLocal || "easy"}&type=multiple`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            localStorage.setItem("data", JSON.stringify(data));

            nextButton.addEventListener("click", function (e) {
                e.preventDefault();
                setNextQuestion();
            });

            /***********************************************************************************/
            const answerButtonsElement = document.querySelectorAll(".opat");
            answerButtonsElement[0].addEventListener("click", reply_click);
            answerButtonsElement[1].addEventListener("click", reply_click);
            answerButtonsElement[2].addEventListener("click", reply_click);
            answerButtonsElement[3].addEventListener("click", reply_click);

            // function selected choice
            function reply_click() {
                selchoice = document.getElementById(event.target.id);
                result = selchoice.value;
                // console.log('result : ' + result);
            }

            // function check Result with right answer
            let score = 0;
            function checkResult(count) {
                if (result == data.results[count].correct_answer) {
                    return ++score;
                }
            }

            function checkResultQuestion9(count) {
                if (result == data.results[count].correct_answer) {
                    ++counter;
                    return ++score;
                }
            }

            // function set  next quesion and record score

            let counter = 0;
            function setNextQuestion() {
                if (counter < 9) {
                    checkResult(counter, result);
                    ++counter;
                    questionContent.textContent = data.results[counter].question
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "’"); // To convert encoding a character
                    let newarray = [...data.results[counter].incorrect_answers];
                    newarray.push(data.results[counter].correct_answer);
                    newarray.sort(() => 0.5 - Math.random());
                    opationOne.value = newarray[0]
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "’");
                    opationTwo.value = newarray[1]
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "’");
                    opationThree.value = newarray[2]
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "’");
                    opationFour.value = newarray[3]
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "’");
                    questionNumber.innerText = counter + 1;
                    console.log("score : " + score);
                } else if (counter == 9) {
                    checkResultQuestion9(counter, result);
                    storeInLocalSorage();
                    console.log("score : " + score);
                    nextButton.style.display = "none";
                    window.location = "../Result/result.html";
                }
            }
            // function storage name and score in localStorge
            let userName = sessionStorage.getItem("name");
            let dataArray = []; // Array to push new data

            function storeInLocalSorage() {
                const dataObject = {
                    name: userName,
                    score: score,
                };
                /* If there is data saved already in local storage, add the new data to old data*/
                let oldData = JSON.parse(localStorage.getItem("oldData"));

                if (oldData !== null) {
                    oldData.push(dataObject);
                    localStorage.setItem("oldData", JSON.stringify(oldData));
                } else {
                    /* If local storage is empty, Push new data to the empty array */
                    dataArray.push(dataObject); //Push object of data to the array
                    /* set stringified data in local storage */
                    localStorage.setItem("oldData", JSON.stringify(dataArray));
                }
            }
        })
        .catch((error) => {
            console.log("Something went wrong", error);
        });
}

const difficultyEle = document.querySelector("#difficulty");
difficultyEle.addEventListener("change", (event) => {
    event.target.value;
    selectDifficulty();
    localStorage.setItem("difficulty", JSON.stringify(event.target.value));
});
function selectDifficulty() {
    var categoryLocal = JSON.parse(localStorage.getItem("category"));
    fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryLocal || 9
        }&difficulty=${difficultyEle.value}&type=multiple`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log("Something went wrong", error);
        });
}
/***********************************************************************************/
