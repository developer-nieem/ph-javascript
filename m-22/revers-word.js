
function reverseWord(word){
   var splitWord = word.split(' ');
   var reversword= [];
   for (let i = splitWord.length - 1 ; i >=0 ; i--) {
    const element = splitWord[i];
    reversword.push(element);
    
   }
   let reversed = reversword.join(' ');
   console.log(reversed);

}


let word = 'im a good boy here is';

reverseWord(word);