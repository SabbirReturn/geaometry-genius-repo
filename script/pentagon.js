function pentagonClick(){
    let base = getInputById('firstPentaInput');
    let height = getInputById('secPentaInput');
    let result = 0.5 * base * height;
    setInnerText('pentagonArea', result);
}

function getInputById(getInput){
    let inputText = document.getElementById(getInput);
    let inputValue = inputText.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerText(element, result){
    let setInner = document.getElementById(element);
    setInner.innerText = result;
}