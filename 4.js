function removeVowels(str,vow){
var vowelRegex = '[aieouAIEOU].*'
var matched = str.match(vowelRegex)
if(matched)
{
return str.replace(/[aeiou]/gi, vow);

}
else
{
console.log('tidak ada huruf vokal');
}}
console.log(removeVowels('cintaku nyangkut di pohon duren','i')) //contoh yang benar
console.log(removeVowels('bcdfghklmnpqrstvwxyz','i')) //ini tidak benar