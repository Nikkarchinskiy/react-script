import React from 'react';
import PropTypes from 'prop-types';



let Product = ({name, imgUrl, price, qty}) => {
    return(
      <div>
      <h2>{name}</h2>
      <img src={imgUrl}
      alt='kebab'/>
      <p>Price: {price}$</p>
      <p>{qty} left</p>
      <p>{qty < 50 ? 'few left' : 'In stock'}</p>
      <button type='button'>Add to card</button>
    </div>
    );
  };

  //Default Props
  Product.defaultProps = {
    imgUrl: 'https://media.istockphoto.com/photos/http-404-error-not-found-page-concept-picture-id1041884806?s=612x612'
  }

  //Props types
  Product.propsTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired
  }


  export default Product;