
// Reusable function for get value from HTML(DOM) and set value in HTML(Dom)
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = "";
    return value;
}
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    const areaWithTwoDecimalValue = area.toFixed(2);
    element.innerText = areaWithTwoDecimalValue;
}

//  Six(6) Geometric - Area Calculation
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    if (isNaN(base) || isNaN(height)) {
        alert("Base or Height or both are not numbers. Please enter a valid number");  
    }
    const area = 0.5 * base * height;
    setElementInnerText('triangle-area', area);
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    if (isNaN(width) || isNaN(length)) {
        alert("Wide or Length or both are not numbers. Please enter a valid number");  
    }
    const area = width * length;
    setElementInnerText('rectangle-area', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if (isNaN(base) || isNaN(height)) {
        alert("Base or Height or both are not numbers. Please enter a valid number");  
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    if (isNaN(d1) || isNaN(d2)) {
        alert("Diameter1 or Diameter2 or both are not numbers. Please enter a valid number");  
    }
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    if (isNaN(perimeter) || isNaN(apothem)) {
        alert("Perimeter or Apothem or both are not numbers. Please enter a valid number");  
    }
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area', area);
}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major-axis');
    const minor = getInputValue('ellipse-minor-axis');
    if (isNaN(major) || isNaN(minor)) {
        alert("Major or Minor or both are not numbers. Please enter a valid number");  
    }
    const area = Math.PI * major * minor;
    setElementInnerText('ellipse-area', area);
}

//Data validation
// 1. Set the proper type of the input field. (number, data, email)
// 2. check type. console.log(typeof "input"); (string, number, boolean,)
// 3. NaN means: Not a number. isNaN is checking whether the input is not a number or not