import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

import spinner from '../assets/spinner.gif';
import Cart from "../components/Cart";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import {
    UPDATE_PRODUCTS,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_TO_CART
} from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";

function Detail() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const { products, cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((CartItem) => CartItem._id === id);

        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });

            //if updating qty, use existing item data & increment purchaseQty by 1
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 }
            });

            //if product isn't in the cart yet, add it to the current idb shopping cart
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id
        });

        idbPromise('cart', 'delete', { ...currentProduct });
    };

    useEffect(() => {
        //already in global storage
        if (products.length) {
            setCurrentProduct(products.find(product => product._id === id));
        }
        //retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        //get cache from idb
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts
                });
            });
        }
    }, [products, data, loading, dispatch, id]);

    return (
        <>
            {currentProduct ? (
                <div className="container my-1">
                    <Link to="/">
                        ??? Back to Products
                    </Link>

                    <h2>{currentProduct.name}</h2>

                    <p>
                        {currentProduct.description}
                    </p>

                    <p>
                        <strong>Price:</strong>
                        ${currentProduct.price}
                        {" "}
                        <button onClick={addToCart}>
                            Add to Cart
                        </button>
                        <button
                            disabled={!cart.find(p => p._id === currentProduct._id)}
                            onClick={removeFromCart}
                        >
                            Remove from Cart
                        </button>
                    </p>

                    <img
                        src={`/images/${currentProduct.image}`}
                        alt={currentProduct.name}
                    />
                </div>
            ) : null}
            {
                loading ? <img src={spinner} alt="loading" /> : null
            }
            <Cart />
        </>
    );
};

export default Detail;