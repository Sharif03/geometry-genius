
// Reusable function for get value from HTML(DOM) and set value in HTML(Dom)
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = "";
    return value;
}
function setElementInnerText(elementId, value){
    const element = document.getElementById(elementId);
    const twoDecimalValue = value.toFixed(2);
    element.innerText = twoDecimalValue;
}

//  Six(6) Geometric - Area Calculation
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;
    setElementInnerText('triangle-area', area);
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;
    setElementInnerText('rectangle-area', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area', area);
}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major-axis');
    const minor = getInputValue('ellipse-minor-axis');
    const area = Math.PI * major * minor;
    setElementInnerText('ellipse-area', area);
}
