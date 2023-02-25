
const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};


// 

const findPersioninformation = (name, age , address, arrValue) =>{

    console.log(person.result[arrValue].name.common);
    const findFirstPersonName =  document.getElementById(name);
    findFirstPersonName.innerText = ` ${person.result[arrValue].name.common}`
    
    document.getElementById(age).innerText = person.result[arrValue].age;
    
    document.getElementById(address).innerText = `Street: ${person.result[arrValue].address.street}, House No: ${person.result[arrValue].address.house}`

}

// first person
findPersioninformation('name-one' , 'age-one' , 'address-one', 0)

// second person
findPersioninformation('name-two' , 'age-two' , 'address-two', 1)

