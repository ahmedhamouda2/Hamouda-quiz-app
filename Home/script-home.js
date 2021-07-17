let startBtn = document.getElementById("start-btn");
let input = document.getElementById("input");

startBtn.addEventListener(
    "click",
    (checkName = (e) => {
        if (input.value == "") {
            e.preventDefault();
            alert("Please must enter a name");
        } else {
            sessionStorage.setItem("name", input.value);
            input.value = "";
        }
    })
);
