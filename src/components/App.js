import React from 'react';
import Product from './Product';
import Section from './Section';
import BookList from './BookList';


// const App = () =>{
//     return (
//       <>


//         <Section title='Popular product'>
//           <Product
//           //  imgUrl ="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           name ='Kebab'
//           price ={22.15}
//           qty ={100}/>

//         </Section>

//         <Section title = 'Best buy'>

//           <Product imgUrl = "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           name = 'Pizza'
//           price ={30}
//           qty={20}/>

//         </Section>





//       </>
//     );
//   };

let favoriteBooks = [
  {id: 1, name: 'React'},
  {id: 2, name: 'JS'},
  {id: 3, name: 'HTML'},
  {id: 4, name: 'CSS'}
];

//Collections
const App = () =>{
    return (
      <>
      {/* [1, 2, 3, 4, 5]
      {[1, 2, 3, 4, 5]}
      {[<h1>1</h1>, <h1>2</h1>, <h1>3</h1>]}
      {favoriteBooks.map((item) => (<li>{item.name}</li>))} */}
      <BookList books={favoriteBooks}/>
      </>
    );
  };

  export default App;