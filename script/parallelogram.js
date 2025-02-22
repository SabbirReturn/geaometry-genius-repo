function ParallelogramClick(){
    let base = getCalculationById('firstParaInput');
    let height = getCalculationById('secParaInput')
    let result = base * height;
    setInnerText('parallelogramArea', result);
    setInnerText('parallelogram-Area', result);
}

function getCalculationById(CalculateById){
    let inputText = document.getElementById(CalculateById);
    let inputTextValue = inputText.value
    let input = parseFloat(inputTextValue);
    return input;
}

function setInnerText(element, result){
    let setInner = document.getElementById(element);
    setInner.innerText = result;
}