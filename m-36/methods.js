
const persion  =  {
    name : 'kalam',
    age : 23,
    salrey : 5000,
    result :  function (){
        
        return `${this.name} passd on honers`
    },
    treat : function(cost){
        this.salrey =  this.salrey - cost;
        return `${this.result() } er karone treat dite hobe ${this.salrey} taker `
    }
}

persion.result();

const treatDimu =  persion.treat(1000);
console.log(treatDimu);