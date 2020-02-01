CheckUsername ("xDIMBOYx");
CheckPassword ("dekkk111DDDod");
function CheckUsername(inputtxt) 
{ 
var username=  /^[x]{1}[A-Z]{4,7}[x]{1}$/;
if(inputtxt.match(username)) 
{ 
alert('Correct, try another...')
console.log("benar")
return true;
}
else
{ 
alert('Wrong...!')
console.log("salah")
return false;
}
}

function CheckPassword(inputtxtt) 
{ 
var password=  /[a-z0-9!@#$%^&*()]((A){3}|(B){3}|(C){3}|(D){3}|(E){3}|(F){3}|(G){3}|(H){3}|(I){3}|(J){3}|(K){3}|(L){3}|(M){3}|(N){3}|(O){3}|(P){3}|(Q){3}|(R){3}|(S){3}|(T){3}|(U){3}|(V){3}|(W){3}|(X){3}|(Y){3}|(Z){3})/;
if(inputtxtt.match(password)) 
{ 
alert('Correct, try another...')
console.log("benar")
return true;
}
else
{ 
alert('Wrong...!')
console.log("salah")
return false;
}
}