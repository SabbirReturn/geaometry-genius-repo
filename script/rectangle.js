function rectangleCalculate(){
    let width = getCalculateById('firstRecInput');
    let length = getCalculateById('secRecInput');
    let result = width * length
    setInnerText('setAreaRec', result);
    setInnerText('rectangle-Area', result);
}

function getCalculateById(getCalculateId){
    let inputText = document.getElementById(getCalculateId);
    let inputValue = inputText.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerText(element, result){
    let setInner = document.getElementById(element);
    setInner.innerText = result;
}