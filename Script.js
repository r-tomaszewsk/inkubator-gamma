const model = document.getElementById("model");
const back = document.getElementById("back");
const body = document.querySelector("body")
const modelCode = document.getElementById("input");
const yearOutput = document.getElementById("year");
const regionOutput = document.getElementById("region");
const matrixTypeOutput = document.getElementById("matrix");
const sizeOutput = document.getElementById("size");
const seriesOutput = document.getElementById("series");
const input = document.querySelector("input");

const outputs = [document.getElementById("year")];


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

        yearOutput.innerText = tvDeviceObject.year.name;
        regionOutput.innerText = tvDeviceObject.region.name;
        matrixTypeOutput.innerText = tvDeviceObject.matrixType.name;
        sizeOutput.innerText = `${tvDeviceObject.screenSize.name}"`;
        seriesOutput.innerText = tvDeviceObject.series.name;
    }


});
back.addEventListener("click", function () {
    body.classList.remove("secondScreen");
    body.classList.add("firstScreen");
})

//UE55NU7021K
//UE40KU6100KXXU
//UE55NU7021KXXU