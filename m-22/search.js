
const kotha = "tui je koi gEli beta bollio na ";

const findString = "Geli";

const output = kotha.toLowerCase().includes(findString.toLowerCase())

// console.log(output);

// index of

console.log(kotha.indexOf("koi"));

if(kotha.indexOf("koi") !== -1){
    console.log("aceee oi line a");
}

// ==========  startwith and endwith
console.log(kotha.startsWith("tui"));
console.log(kotha.endsWith("tui"));