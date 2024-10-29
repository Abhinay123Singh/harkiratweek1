const fs=required("fs");
const contents=fs.readFile("a.txt","utf-8");
console.log(contents);



// objects 
var user={
age:21,
name: "Abhinay",
calculateAge:function()
{
return 10;
}
}
console.log(user.calculateAge());


