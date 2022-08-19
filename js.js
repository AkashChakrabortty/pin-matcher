function pinFunction(){
    // create random 4digit number
    const pin = Math.floor( Math.random() * 10000 );
    // check 4 digit or not
    const pinString = pin.toString();
    if(pinString.length < 4){
        return this.pinFunction();
    }
    else{
        return pinString;
    }
}
function setValue(id,value){
   const getId = document.getElementById(id);
   getId.value = value;
}
function calculator(value){
    // previous value
   const previousValue = document.getElementById('calInput').value;
   const stringValue = previousValue + value; 
   return stringValue;
} 
function clearRight(){
    // previous value
    const previousValue = document.getElementById('calInput').value;
    
    const newValue = previousValue.slice(0,previousValue.length-1);
    return newValue;
}
function submitFunction(){
    // get pinInput
    const pinInput = document.getElementById('pinInput').value;
    // get calInput
    const calInput =  document.getElementById('calInput').value;
   
    if(pinInput === calInput){
        return 1;
    }
    else{
        return 0;
    }

}
document.getElementById('pinBtn').addEventListener('click', function(){
    const fourPin = pinFunction();
    setValue('pinInput',fourPin);
})

document.getElementById('calValue').addEventListener('click', function(event){
   let calValue;
   const value = event.target.innerText;
   if(value == '<'){
    calValue = clearRight();
   }
   else if( value == 'C' ){
    calValue = '';
   }
   else{
    calValue = calculator(value);
   }
    setValue('calInput',calValue);
})

document.getElementById('submit').addEventListener('click', function(){
    const returnValue = submitFunction();
    if(returnValue == 1){
       document.getElementById('correct').style.display = "block";
    }
    else{
        document.getElementById('wrong').style.display = "block";
    }
})