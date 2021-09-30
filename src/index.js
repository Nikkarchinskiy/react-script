import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(<App/>, document.querySelector('#root'));

// React createElement(type,[props], [...children])

// let link = React.createElement('a', {
//   href: 'https://ru.reactjs.org/',
//   target: '_blanck'
// // }, 'React website');

// let image = React.createElement('img', {
//   src: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   alt: 'kebab',
//   width: 400
// });

// let img = (<img src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// alt='kebab' width='400' />)

// const Product = () => {
//   const handleClick = () => {
//     console.log('click');
//   }
//   return (
//     <div>
//       <h3>Kebab mangal</h3>
//       <p>Price: 15.99$</p>
//       <img src="" alt="" style={{width: '400px', height: '150px'}}/>
//       <button onClick={handleClick}>Add to cart</button>
//     </div>
//   )
// }

// const Search = () => <input type="search" />


// const App = () => {
//   return (
//     <div>
//       <Product />
//       <Search />
//     </div>
//   )
// }


// let title = React.createElement('h3', {}, 'Kebab mangal');

// let price = React.createElement('p', {}, 'Price: 15.99$');

// let btn = React.createElement('button', {
//   type: 'button'
// }, 'Add to cart');

// // let product = React.createElement('div', null, title, image, price, btn);
// let product = React.createElement('div', {
//   children: [title, image, price, btn]
// });

// console.log('product',product);



//Rende to DOM ================================

// ReactDom.render(product, document.querySelector('#root'));



// JSX ============================================

// let link = React.createElement('a', {
//   href: 'https://ru.reactjs.org/',
//   target: '_blanck'
// }, 'React website');

// let link = (<a href="https://ru.reactjs.org/" target="_blanck" >React website</a>);



// JSX Single parent===========================



// let link = (
  // <div>
  // <a href="https://ru.reactjs.org/" target="_blanck">React website</a>
  // <a href="https://google.com" target="_blanck">Google</a>
  // </div>

  // <>
  // <a href="https://ru.reactjs.org/" target="_blanck">React website</a>
  // <a href="https://google.com" target="_blanck">Google</a>
  // </>

  // <React.Fragment>
  // <a href="https://ru.reactjs.org/" target="_blanck">React website</a>
  // <a href="https://google.com" target="_blanck">Google</a>
  // </React.Fragment>
// );

// ReactDom.render(link, document.querySelector('#root'));

// let title = "Kebab Mangal";
// let imgUrl = 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

// let ProductJsx = (
//   <div>
//     <h2>{title}</h2>
//     <img src={imgUrl}
//     alt='kebab'/>
//     <p>Price: 15.99$</p>
//     <p>{2 < 1 ? 'Kebab' : 'Pizza'}</p>
//     <button type='button'>Add to card</button>
//   </div>
// )


// Components ==========================================

