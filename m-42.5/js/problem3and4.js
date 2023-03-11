
// Name part
const nameSetStore = () =>{
    const getNameInput = document.getElementById('name-input').value;
    document.getElementById('name-input').value = '';
    const nameStringify = JSON.stringify(getNameInput);
    localStorage.setItem('name', nameStringify)
}

const nameReomoveSrore = () =>{
    localStorage.removeItem('name');
}

// email part 

const emailSetStore = () => {
    const getEmailInput =  document.getElementById('email-input').value;
    document.getElementById('email-input').value = '';

    const emailStringify = JSON.stringify(getEmailInput);
    localStorage.setItem('email' , emailStringify)
}

const emailReomoveSrore = () =>{
    localStorage.removeItem('email');
}

// message part

const messageSetStore = () => {
    const getmessageInput =  document.getElementById('message-input').value;
    document.getElementById('message-input').value = '';

    const messageStringify = JSON.stringify(getmessageInput);
    localStorage.setItem('message' , messageStringify)
}

const messageReomoveSrore = () =>{
    localStorage.removeItem('message');
}

// all reset the localstoreage

const resetAllLocalSore = () => {
    localStorage.clear()
}



// send all

const getAllInput = () =>{

    const data ={
        name : document.getElementById('name-input').value,
        email : document.getElementById('name-input').value,
        message : document.getElementById('name-input').value
    }

  localStorage.setItem("myData", JSON.stringify(data));
}



// const getInforamtion = () =>{
//     let inform =  {};
//     const getinforamtion =  localStorage.getItem('all');
//     if (getinforamtion) {
//         inform = JSON.parse(getinforamtion)
//     }
//     return inform
// }

// const sendAllfieldTolocalStorage = (name, email, message) =>{
  
//     const allinform= getInforamtion();
//     allinform[name, email , message] = name, email, message;

//     const allStringify = JSON.stringify(allinform);
//     console.log(allStringify);

//     localStorage.setItem('all' , allStringify)
// }