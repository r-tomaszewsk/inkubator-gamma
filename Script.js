const model = document.getElementById("model");
const back = document.getElementById("back");
const body = document.querySelector("body")

const modelCode = document.getElementById("input");

model.addEventListener("click", function(){
    body.classList.remove("firstScreen");
    body.classList.add("secondScreen")

    



});

back.addEventListener("click", function() {
    body.classList.remove("secondScreen");
    body.classList.add("firstScreen");
})