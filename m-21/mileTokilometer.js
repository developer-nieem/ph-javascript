function mileToKilometer(mile){
    const km = mile * 1.60934;
    return km;
}

const mileValues = 2;
const output = mileToKilometer(mileValues);
console.log(output);