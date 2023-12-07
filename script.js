function flushOperation(intBuffer){
    if(previousOperator === '+'){
        runninTotal += intBuffer;
    }else if(previousOperator === '-'){
        runninTotal -= intBuffer;
    }else if(previousOperator === '*'){
        runninTotal *= intBuffer
    }else if(previousOperator === '/'){
        runninTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}
