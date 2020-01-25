var a = "dimas bayu";
var b= {};

for (let i=0;i<a.length;i++){
    if((a.match(new RegExp(a[i], "g"))).length > 1){
        b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
    }
   else console.log("karakter ke-" +i+" tidak ada pengulangan")
}

console.log(b)