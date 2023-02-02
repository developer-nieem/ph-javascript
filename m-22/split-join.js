
var lyrics = "ki janani hobe goo amar. dekho aktu";

var parts = lyrics.split(' ');
// console.log(parts);
var sentence = lyrics.split('.');
// console.log(sentence);
var char = lyrics.split("");
// console.log(char);

var showSpicific = lyrics.slice(3 ,10);
// console.log(showSpicific);

var showSpicific2 = lyrics.substring(3,10);
// console.log(showSpicific2);

var join =[
    'ki janani hobe goo amar.', "dekho aktu"
]

var joinline = join.join()
var joinline = join.join("- ")
console.log(joinline);