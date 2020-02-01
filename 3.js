function validName(n){
  var nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
  if(n.match(nameRegex) == null){
    return "harus string!";
  }
  else{
    n = n.split('');

  //Remove the first and the last letter
  let first = n.shift();
  let last = n.pop();

  //Shuffle the remaining letters
  for (let i = n.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [n[i], n[j]] = [n[j], n[i]];
  }

  //Append and return
  return first + n.join("") + last;
  }
  }

let random = validName('n');
console.log(validName("dimasbayususeno")) //randomize yang true
console.log(validName("dimasbayus2425")) //randomize yang false