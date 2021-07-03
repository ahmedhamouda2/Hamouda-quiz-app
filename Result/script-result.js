let resultScore = document.getElementById('result-score')
let userName = document.getElementById('name-user')
let data = JSON.parse(localStorage.getItem("data"))
let length = data.length

resultScore.textContent = data[length-1].score
userName.textContent = data[length-1].name