
function sum(m){
    if (m == 1) {
        return 1;
    }

    return m + sum(m-1);
}

console.log(sum(5));

/* 
    m+sum(m-1) = 5 + sum(4);
    5 + m + sum(m-1) = 5+4 +sum(3);
    5+4+m + sum(m-1) = 5+4+3+sum(2);
    5+4+3+m + sum(m-1) = 5+4+3+2+sum(1);
    5+4+3+2+1

*/