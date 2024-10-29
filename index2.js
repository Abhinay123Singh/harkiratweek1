const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

var user = {
    age: 12,
    name: "Abhinay Singh", // Corrected the syntax error
    calculateAge: function() { // Ensure the function is properly formatted
        return 10;
    }
}
console.log(user.calculateAge());
