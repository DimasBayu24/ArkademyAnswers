var name = "dimas";
var age = 24;
var address = "bandung";
var hobby = ["baca","olahraga"];
var is_married = true;
var school = {
    SD : "SD 001",
    SMP : "SMP 32",
    SMA : "SMA 5"
}
var skills = {
    java : "mediocore",
    arduino : "good"
}
var interested_in_coding = true;

const biodata = {
    name,
    age,
    address,
    hobby,
    is_married,
    school,
    skills,
    interested_in_coding,
}

function biodataku(name, age) {
    if (name == "dimas")
        (age == 24)
        
    return JSON.stringify(biodata);
}
    console.log(JSON.stringify(biodata))
    
