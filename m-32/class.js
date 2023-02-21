
class Instactor {
name;
work =  `web development`;
team = `webptohelper`;
location;

constructor(name , location){
    this.name =  name;
    this.location = location;
}
startSupportS(time){
    console.log(`you can start support ${time}`);
}
}

const result =  new Instactor();
console.log(result);
result.startSupportS(10.00);

const alamin =  new Instactor('alamin', 'potuakhai');
console.log(alamin);