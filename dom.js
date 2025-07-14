let counterElement=document.getElementById("counterValue");
let incrementElement=document.getElementById("increment");
let decrementElement=document.getElementById("decrement");
let resetionElement=document.getElementById("resetion");
let paragrapgElement=document.getElementById("paragraph");
resetionElement.style.color='black';



function onIncrement(){
    let preiousvalue=counterElement.textContent;
    let updatedvalue=parseInt(preiousvalue)+1;


    counterElement.textContent=updatedvalue

    if(updatedvalue > 0){
        counterElement.style.color='green'
        incrementElement.style.backgroundColor='green'
        decrementElement.style.backgroundColor='#f1f5f8'
        resetionElement.style.backgroundColor='white'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);


    }
    else if(updatedvalue < 0){
        counterElement.style.color='red'
        incrementElement.style.backgroundColor='#f1f5f8'
        decrementElement.style.backgroundColor='red'
        resetionElement.style.backgroundColor='white'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);

    }
    else{
        counterElement.style.color='black'
        incrementElement.style.backgroundColor='#f1f5f8'
        decrementElement.style.backgroundColor='#f1f5f8'
        resetionElement.style.backgroundColor='brown'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);

    }
}




function onDecrement(){
    let preiousvalue=counterElement.textContent;
    let updatedvalue=parseInt(preiousvalue)-1;
    paragrapgElement.textContent=String(updatedvalue);


    counterElement.textContent=updatedvalue
    if(updatedvalue > 0){
        counterElement.style.color='green'
        incrementElement.style.backgroundColor='green'
        decrementElement.style.backgroundColor='#f1f5f8'
        resetionElement.style.backgroundColor='#f1f5f8'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);


    }
    else if(updatedvalue < 0){
        counterElement.style.color='red'
        incrementElement.style.backgroundColor='#f1f5f8'
        decrementElement.style.backgroundColor='red'
        resetionElement.style.backgroundColor='#f1f5f8'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);


    }
    else{
        counterElement.style.color='black'
        incrementElement.style.backgroundColor='#f1f5f8'
        decrementElement.style.backgroundColor='#f1f5f8'
        resetionElement.style.backgroundColor='brown'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);

    }
}




function onReset(){
    updatedvalue=0;
    counterElement.textContent=updatedvalue;
    if(updatedvalue > 0){
        counterElement.style.color='green'
        incrementElement.style.backgroundColor='green'
        decrementElement.style.backgroundColor='#f1f5f8'
        resetionElement.style.backgroundColor='#f1f5f8'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);

    }
    else if(updatedvalue < 0){
        counterElement.style.color='red'
        incrementElement.style.backgroundColor='#f1f5f8'
        decrementElement.style.backgroundColor='red'
        resetionElement.style.backgroundColor='#f1f5f8'
        paragrapgElement.textContent="Your Current Value is:  "+String(updatedvalue);

    }
    else{
        counterElement.style.color='black'
        incrementElement.style.backgroundColor='#f1f5f8'
        decrementElement.style.backgroundColor='#f1f5f8'
        resetionElement.style.backgroundColor='brown'
        paragrapgElement.textContent="Your Current alue is:  "+String(updatedvalue);


    }
}