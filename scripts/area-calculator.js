
function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText);

    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);

    const area = 0.5 * base * height;
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;
}
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);

    const area = width * length;
    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;
}