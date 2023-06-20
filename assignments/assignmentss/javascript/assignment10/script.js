const multiplyNumbers = ()=>{
    const val1=parseFloat(document.getElementById('num1').value)
    const val2=parseFloat(document.getElementById('num2').value)

    const result=val1*val2

    document.getElementById("result").innerHTML = "Multiplication Result: " + result;


}

const divideNumbers = ()=>{
    const val1=parseFloat(document.getElementById('num1').value)
    const val2=parseFloat(document.getElementById('num2').value)

    const result=val1/val2

    document.getElementById("result").innerHTML = "Division Result: " + result;


}