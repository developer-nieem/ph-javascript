const a = () =>{
    console.log('a');
    b();
    console.log('aa');
}

const b =() => {
    console.log('b');
    d();
    console.log('bb');
}

const d =() => {
    console.log('d');
    console.log('dd');
}

a()