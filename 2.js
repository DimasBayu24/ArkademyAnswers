CheckUsername ("dima65_as");
CheckPassword ("1@3$5^7*9");
function CheckUsername(inputtxt) 
{ 
var username=  /^(?=.{8,12}$)[a-z0-9_.]+$/;
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
var password=  /^(?=.{9}$)[a-zA-Z0-9]+[_!@#$()<>%^&=?|*\-]+[a-zA-Z0-9_!@#$()<>%^&=?|*\-]*$/;
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