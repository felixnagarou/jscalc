function addition(a, b) {
    return a + b
}

function soustraction(a, b) {
    return a - b
}

function division(a, b) {
    return a /b
}

function power(a, b){
    return a**b
}

function multiply(a, b){
    return a*b
}

function sqrt(a){
    return Math.sqrt(a)
}


function isEqual(a, b){
    return a === b 
}

function del(a){
    return a.pop()
}

function clear(a){
    a = []
}

function getResult(a, op, b){
    return eval(a + op + b)
}


export { addition, soustraction, division, power, multiply, sqrt, isEqual, del, clear}