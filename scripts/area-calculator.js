
// Reusable function for get value from HTML(DOM) and set value in HTML(Dom)
function getFieldValueById(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = "";
    return value;
}
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    const twoDecimalValue = value.toFixed(2);
    element.innerText = twoDecimalValue;
}

//  Six(6) Geometric - Area Calculation
function calculateTriangleArea(){
    const base = getFieldValueById('triangle-base');
    const height = getFieldValueById('triangle-height');
    const area = 0.5 * base * height;
    setElementValueById('triangle-area', area);
}

function calculateRectangleArea(){
    const width = getFieldValueById('rectangle-width');
    const length = getFieldValueById('rectangle-length');
    const area = width * length;
    setElementValueById('rectangle-area', area);
}

function calculateParallelogramArea(){
    const base = getFieldValueById('parallelogram-base');
    const height = getFieldValueById('parallelogram-height');
    const area = base * height;
    setElementValueById('parallelogram-area', area);
}

function calculateRhombusArea(){
    const d1 = getFieldValueById('rhombus-d1');
    const d2 = getFieldValueById('rhombus-d2');
    const area = 0.5 * d1 * d2;
    setElementValueById('rhombus-area', area);
}

function calculatePentagonArea(){
    const perimeter = getFieldValueById('pentagon-perimeter');
    const apothem = getFieldValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setElementValueById('pentagon-area', area);
}

function calculateEllipseArea(){
    const major = getFieldValueById('ellipse-major-axis');
    const minor = getFieldValueById('ellipse-minor-axis');
    const area = Math.PI * major * minor;
    setElementValueById('ellipse-area', area);
}
