class Expression{
    constructor(a, operand, b){
        this.a = new Expression()
        this.b = new Expression() 
        this.operand = operand
    }
}


function getExpressionResult(){
    return a + operand + b  
}

export default Expression