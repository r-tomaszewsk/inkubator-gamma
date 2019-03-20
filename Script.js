const button = document.querySelector("button:first-of-type");
const buttonModel = document.querySelector("button:nth-of-type(2)");

button.addEventListener("click", function(){
    console.log("click!");
});
buttonModel.addEventListener("click", function() {
    console.log("This is model")
})