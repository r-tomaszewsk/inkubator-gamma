const model = document.getElementById("model");
const back = document.getElementById("back");
const body = document.body;
const modelCode = document.getElementById("myModel");
const input = document.querySelector("input");
const object = document.querySelector("object");

const displayOutputs = {
    yearOutput: document.getElementById("year"),
    regionOutput: document.getElementById("region"),
    matrixTypeOutput: document.getElementById("matrix"),
    sizeOutput: document.getElementById("size"),
    seriesOutput: document.getElementById("series"),
}

document.body.addEventListener("keydown", function(e) {  
    switch(e.keyCode) {
        case 13:
        app.nav.getActiveElement();
        break;
        case 65376:
        input.blur();
        break;
        case 65385:
        input.blur();
        break;
    }
})

app.nav.init();


//UE55NU7021K
//UE40KU6100KXXU
//UE55NU7021KXXU