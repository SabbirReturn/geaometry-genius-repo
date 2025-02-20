function calculate(){
    let base = getInputValueById('triangleFirstInput');
    let height = getInputValueById('triangleSecondInput');
    let result = 0.5 * base * height;
    setInnerText('triangleArea', result);
    setInnerText('traingle-Area',result);
    document.getElementById('triangleFirstInput').value = '';
    document.getElementById('triangleSecondInput').value = '';
}

function getInputValueById(inputValueById){
    let inputId = document.getElementById(inputValueById);
    let inputValue = inputId.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerText(setText, result){
    let setInner = document.getElementById(setText);
    setInner.innerText = result;
}