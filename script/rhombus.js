function rhombusCalculation(){
    let base = getCalculationById('firstRhomInput');
    let height = getCalculationById('secRhomInput')
    let result = 0.5 * base * height;
    setInnerText('rhombusArea', result);
    setInnerText('rhombus-Area',result);
   
}

function getCalculationById(calculateById){
    let inputText = document.getElementById(calculateById);
    let inputValue = inputText.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerText(element, result){
    let setInner = document.getElementById(element);
    setInner.innerText = result;
}