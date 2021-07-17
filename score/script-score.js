let nameLocal = JSON.parse(localStorage.getItem("oldData"))

nameLocal.sort(function (x, y) {
    return y.score - x.score;
});

document.querySelector('.number-one').textContent = nameLocal[0].name 
document.querySelector('.score-result-one').textContent = nameLocal[0].score

if(nameLocal[1] !== undefined){
    document.querySelector('.number-two').textContent = nameLocal[1].name 
    document.querySelector('.score-result-two').textContent = nameLocal[1].score 
}

if(nameLocal[2] !== undefined){
    document.querySelector('.number-three').textContent = nameLocal[2].name 
    document.querySelector('.score-result-three').textContent = nameLocal[2].score
}