
function getTextEditorById(id){
    const texEditorInput = document.getElementById(id);
    return texEditorInput;

}
// function buttonColor(e){
//     e.target.classList.toggle('bg-purple-600')
//     e.target.classList.toggle('text-white')
// }
//   make bold
document.getElementById('bold').addEventListener('click' , function(e){
    
    getTextEditorById('text-editor').classList.toggle('font-bold');
    // buttonColor(e)
    // document.getElementById('text-editor')
    
})
// make italic
document.getElementById('italic').addEventListener('click' , function(){
    
    getTextEditorById('text-editor').style.fontStyle  =  'italic';
    
})

// make underline
document.getElementById('underline').addEventListener('click' , function(){
    getTextEditorById('text-editor').style.textDecoration  =  'underline';
    
})

// align item change
document.getElementById('left-text').addEventListener('click' , function(){
    getTextEditorById('text-editor').style.textAlign  =  'left';
    
})
// align item change
document.getElementById('text-center').addEventListener('click' , function(){
    getTextEditorById('text-editor').style.textAlign  =  'center';
    
})
// align item change
document.getElementById('text-right').addEventListener('click' , function(){
    getTextEditorById('text-editor').style.textAlign  =  'right';
    
})
// align item change
document.getElementById('text-justify').addEventListener('click' , function(){
    getTextEditorById('text-editor').style.textAlign  =  'justify';
    
})

