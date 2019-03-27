const model = document.getElementById("model");
const back = document.getElementById("back");
const body = document.body;
const modelCode = document.getElementById("myModel");
const input = document.querySelector("input");

const displayOutputs = {
    yearOutput: document.getElementById("year"),
    regionOutput: document.getElementById("region"),
    matrixTypeOutput: document.getElementById("matrix"),
    sizeOutput: document.getElementById("size"),
    seriesOutput: document.getElementById("series"),
}

myModel.addEventListener("click", function() {
    const tvModel = app.modelCode.parse(webapis.productinfo.getRealModel());
})

model.addEventListener("click", function () {
    const textFieldValue = input.value;
    const tvDeviceObject = app.modelCode.parse(textFieldValue);
    if (!textFieldValue) {
        (function () {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            setTimeout(function () {
                popup.style.display = "none";
            }, 2000);
        })();
    } else {
        body.classList.remove("firstScreen");
        body.classList.add("secondScreen")

        displayOutputs.yearOutput.innerText = tvDeviceObject.year.name;
        displayOutputs.regionOutput.innerText = tvDeviceObject.region.name;
        displayOutputs.matrixTypeOutput.innerText = tvDeviceObject.matrixType.name;
        displayOutputs.sizeOutput.innerText = `${tvDeviceObject.screenSize.name}"`;
        displayOutputs.seriesOutput.innerText = tvDeviceObject.series.name;
    }
});
back.addEventListener("click", function () {
    body.classList.remove("secondScreen");
    body.classList.add("firstScreen");
})

document.body.addEventListener("keydown", function(e) {  
    switch(e.keyCode) {
        case 13:
        app.nav.getActiveElement();
        break;
    }
})

app.nav.init();


//UE55NU7021K
//UE40KU6100KXXU
//UE55NU7021KXXU