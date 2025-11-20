const { resolve } = require("path");

const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile("./firstname.txt", "utf-8")
.then(fName => {
    return fs.readFile("./lastname.txt", "utf-8")
    .then(lastName => {
        fs.readFile("./age.txt", "utf-8")
        .then(age => {
            fs.readFile("hobbies.txt", "utf-8")
            .then(hobby => {
                hobby = hobby.replace("[", "")
                hobby = hobby.replace("]", "")
                const hobbyArray = hobby.split(",");
                console.log(`${fName} ${lastName} is ${age} years old and his bobbies are ${hobbyArray[0]} and ${hobbyArray[1]}`)
            })
        })
    })
}).catch(err => console.log(err))

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFiles() {
    try{
        const fNameData = await fs.readFile("./firstname.txt", "utf-8");
        const lNameData = await fs.readFile("./lastname.txt", "utf-8");
        const age = await fs.readFile("./age.txt", "utf-8");
        let hobby = await fs.readFile("./hobbies.txt", "utf-8");
        hobby = hobby.replace("[", "");
        hobby = hobby.replace("]", "")
        const hobbyArray = hobby.split(",");
        console.log(`${fNameData} ${lNameData} is ${age} years old and his hobbies are ${hobbyArray[0]} and ${hobbyArray[1]}`);
    } catch(err) {
        console.error(err);
    }
}

readFiles();