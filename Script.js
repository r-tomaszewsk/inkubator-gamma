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




model.addEventListener("click", function () {
    body.classList.remove("firstScreen");
    body.classList.add("secondScreen")

    const textFieldValue = input.value;
    const tvDeviceObject = app.modelCode.parse(textFieldValue);
    // const tvDeviceObject = app.modelCode.parse('ue65mus9000t');

    yearOutput.innerText = tvDeviceObject.year.name;
    regionOutput.innerText = tvDeviceObject.region.name;
    matrixTypeOutput.innerText = tvDeviceObject.matrixType.name;
    sizeOutput.innerText = tvDeviceObject.screenSize.name;
    seriesOutput.innerText = tvDeviceObject.series.name;
    console.log(tvDeviceObject);
});
back.addEventListener("click", function () {
    body.classList.remove("secondScreen");
    body.classList.add("firstScreen");
})