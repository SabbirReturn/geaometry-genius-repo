function ellipseClick(){
    let base = getInputById('firstEllipInput')
    let height = getInputById('secEllipInput')
    let result = 3.1416 * base * height;
    setInnerText('ellipseArea', result);
    setInnerText('ellipse-Area', result);
}

function getInputById(getInput){
    let inputText = document.getElementById(getInput);
    let inputValue = inputText.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerText (element, result){
    let setInner = document.getElementById(element);
    setInner.innerText = result;
}