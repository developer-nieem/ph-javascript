const yourName = "hasan";
const yourInput = "hasaN";
console.log(yourName.toUpperCase());
console.log(yourInput.toLowerCase());

if (yourName.toLocaleLowerCase() === yourInput.toLocaleLowerCase() ) {
    console.log(true);
}else{
    console.log(false);
}