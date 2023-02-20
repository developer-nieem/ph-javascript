
const user ={
    id: 10,
    name: 'nieem',
    address : {
        village:{
            road:12/21,
            stition:'keorabunia',
        },
        post:'Asakhali',
        city:{
            thana: 'barguna',
            district: 'barguna'
        },
        },
    height: 7   
}

const output =  user.address.citye?.district;
console.log(output);