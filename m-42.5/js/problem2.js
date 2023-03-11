let count = 0;
const countNumber = () =>{

    const getInitialNumber =  document.getElementById('count-plus');
    const showCOunt =   getInitialNumber.innerText =  ++count;
  
                    // no need this projects
                    /*      const getItemFromLocalstorage = () =>{
                            const count = localStorage.getItem('count');
                            let getCount =  {};
                            if(count){
                                getCount = JSON.parse(count);
                            }
                            return getCount;
                            }
                            getItemFromLocalstorage()
                    */

    // set local storage
        const dataStringify = JSON.stringify(showCOunt);
        localStorage.setItem('count' , dataStringify)
}

     
    const getStorrageData = localStorage.getItem('count');
    document.getElementById('count-plus').innerText = getStorrageData;



