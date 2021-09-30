import React from 'react';
import PropTypes from 'prop-types';


function BookList({books}) {
    return (
        <ul>
            {books.map(({id, name}) => (<li key={id}>{name}</li>))}
        </ul>
    )
}

//Defaul Props


//Prop Types
BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default BookList;