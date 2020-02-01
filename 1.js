
var address = "bandung";
var hobby = ["baca","olahraga"];
var is_married = false;
var school = {
    Univ : "Telkom University",
            year_in : "2013",
            year_out : "2019",
            major : "Electrical_engineering",
}
var skills = {
    java : "mediocre",
    arduino : "good"
}
var interested_in_coding = true;

biodataku("dimas", "24");



function biodataku(name, age) {
   
        
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
    return JSON.stringify(biodata);
    console.log(JSON.stringify(biodata));
}
    
    
