import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { BrowserRouter } from 'react-router-dom';
import Snake from '../../assets/hero/rainbow-boa.jpg';

function Product(item) {
    const {
        image,
        name,
        _id,
        price,
        quantity
    } = item;

    return (
        <div>
            <BrowserRouter>
                <Link to={`/products/${_id}`}>
                    <img
                        alt={name}
                        src={Snake}
                    />
                    <p>{name}</p>
                </Link>
            </BrowserRouter>

            <div>
                <div>{quantity} {pluralize("item", quantity)} in stock.</div>
                <span>${price}</span>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;