
// Reusable function for get value from HTML(DOM) and set value in HTML(Dom)
// Get value from input field
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = "";
    return value;
}

// Set text into HTML elements function
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    const areaWithTwoDecimalValue = area.toFixed(2);
    element.innerText = areaWithTwoDecimalValue;
}

//Data validation function
function dataValidate(number){
    if (isNaN(number)) {
        alert("Please enter a valid number");  
        return;
    }
}

//  Six(6) Geometric - Area Calculation
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    dataValidate(base);
    dataValidate(height);
    if (isNaN(base) || isNaN(height)) {
        alert("Base or Height or both are not numbers. Please enter a valid number");  
    }
    else{
        const area = 0.5 * base * height;
        setElementInnerText('triangle-area', area);
    }
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    if (isNaN(width) || isNaN(length)) {
        alert("Wide or Length or both are not numbers. Please enter a valid number");  
    }
    else{
        const area = width * length;
        setElementInnerText('rectangle-area', area);
    }
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if (isNaN(base) || isNaN(height)) {
        alert("Base or Height or both are not numbers. Please enter a valid number");  
    }
    else{
        const area = base * height;
        setElementInnerText('parallelogram-area', area);
        
        // add to calculation entry
        addToCalculationEntry('Parallelogram', area);
    }
}

function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
    if (isNaN(d1) || isNaN(d2)) {
        alert("Diameter1 or Diameter2 or both are not numbers. Please enter a valid number");  
    }
    else{
        const area = 0.5 * d1 * d2;
        setElementInnerText('rhombus-area', area);
    }
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    if (isNaN(perimeter) || isNaN(apothem)) {
        alert("Perimeter or Apothem or both are not numbers. Please enter a valid number");  
    }
    else{
        const area = 0.5 * perimeter * apothem;
        setElementInnerText('pentagon-area', area);
    }
}

function calculateEllipseArea(){
    const major = getInputValue('ellipse-major-axis');
    const minor = getInputValue('ellipse-minor-axis');
    if (isNaN(major) || isNaN(minor)) {
        alert("Major or Minor or both are not numbers. Please enter a valid number"); 
    }  
    else{
        const area = Math.PI * major * minor;
        setElementInnerText('ellipse-area', area); 
    }
}

// add to calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    p.classList.add('my-4');
    const count = calculationEntry.childElementCount;
    p.innerHTML =  `${count + 1}.  ${areaType} ${area.toFixed(2)} cm<sup>2</sup>   <button class="btn btn-xs btn-success">Convert m<sup>2</sup></button>`;

    calculationEntry.appendChild(p);
}