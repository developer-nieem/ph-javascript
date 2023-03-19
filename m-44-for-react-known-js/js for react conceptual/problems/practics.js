
const books = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.0,
      inStock: true,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.5,
      inStock: true,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 3.9,
      inStock: false,
    },
    { title: "1984", author: "George Orwell", rating: 4.3, inStock: true },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      rating: 4.9,
      inStock: false,
    },
  ];

  const getUl = document.getElementById('main-ul');

  const booksTilte = books.map(book => book.title);
  booksTilte.forEach(title =>{
    getUl.innerHTML += `<li>${title}</li>`
  })

//   const getdiv = document.getElementById('main-container');
//   const book = books.find(b => b.rating > 4);
//   getdiv.innerHTML += `<ul>
//   <li>${book.title}</li> 
//   <li>${book.author}</li> 
//   <li>${book.rating}</li> 
//   <li>${book.inStock}</li> 
//   </ul>`


//   const getdiv = document.getElementById('main-container');
  
//   const book = books.filter(b => b.rating > 4);
// //   console.log(book);
//   getdiv.innerHTML += `<div>
//   ${book.forEach(data => {
//     console.log(Object.keys(data));
//     const prop = Object.keys(data);
//     prop.forEach(data => {
//         getdiv2.innerHTML += `
//         <li>${data}/li>
//         `
//     })
   
//   })}
//   </div>`

//   <li>${book.title}</li> 
//   <li>${book.author}</li> 
//   <li>${book.rating}</li> 
//   <li>${book.inStock}</li> 