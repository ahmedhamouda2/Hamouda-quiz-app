let resultScore = document.getElementById('result-score')
let userName = document.getElementById('name-user')
let data = JSON.parse(localStorage.getItem("oldData"))
let length = data.length

resultScore.textContent = data[length-1].score
userName.textContent = data[length-1].name

let copyUrl = document.getElementById('copy-url')

copyUrl.addEventListener('click' , copyToClipboard = () => {
    var inputCopy = document.body.appendChild(document.createElement("input"));
    inputCopy.value = window.location.href;
    inputCopy.focus();
    inputCopy.select();
    document.execCommand('copy');
    inputCopy.parentNode.removeChild(inputCopy);
    alert("URL Copied.");
    })