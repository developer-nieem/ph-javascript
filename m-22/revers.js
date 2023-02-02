
function reverseChar(text){
        let reversed = ' ';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element
    }
    console.log(reversed);
}

let content = 'I am the legend boy';

 reverseChar(content);
