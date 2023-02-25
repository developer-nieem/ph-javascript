
function qoutesList(){
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQoutas(data))


}

function displayQoutas(qoutas){

    const qoutaId =  document.getElementById('qoutas');
    qoutaId.innerText = qoutas.quote
}