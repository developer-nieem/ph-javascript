
function leapYear(year){
        const remainder = year % 4;
        const remainder2 = year % 100;
        const remainder3 = year % 400;

    if(remainder == 0 && remainder2 != 0 || remainder3 == 0){
        return "this year is leap year" + year;
    }else{
        return "this year is not leap year " + year;
    }
}

var yearValue = 2025;

const output = leapYear(yearValue);
console.log(output);

/* function leapYear(year){
    const remainder = year % 4;
    const remainder2 = year % 100;
    const remainder3 = year % 400;

if(remainder == 0){
    return "this year is leap year " + year;
}else if(remainder2 != 0){
    return "this year is  leap year " + year;
}else if(remainder3 == 0){
    return "this year is  leap year " + year;
}
return "this year is not  leap year " + year;
}

var yearValue = 2024;

const output = leapYear(yearValue);
console.log(output); */