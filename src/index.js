import cf from "coinflipperjs";
import './colors';

console.log("Pozdrav svima!")

class Auto {
    constructor() {
        this.name = "Auto";
    }
}

const auto = new Auto("BMW");

console.log(auto);

console.log(cf());

//create new js file in this directory with fs
// const fs = require('fs');
// fs.writeFile('./src/colors.js', 'export default "red";', err => { 
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File created');
//     }
// });

