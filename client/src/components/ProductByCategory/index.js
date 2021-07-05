import React, { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { useRouteMatch } from 'react-router';

import Product from "../Product";
import { QUERY_PRODUCTS } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductByCategory() {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const { params: { id } } = useRouteMatch();

    useEffect(() => {
        //if there is data to be stored:
        if (data) {
            //store it in the global state object
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            //and also take each product & save it to IndexedDB 
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            //get all the data from the 'products' store since we're offline
            idbPromise('products', 'get').then((products) => {
                //use data to set global state for offline browsing
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!id) {
            return state.products;
        }

        return state.products.filter(product => product.category._id === id);
    }

    return (
        <div className="my-2">
            <h2 className="product-title">Our Products:</h2>
            {state.products.length ? (
                <div className="flex-row justify-content-around">
                    {filterProducts().map(product => (
                        <Product
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
            {loading ?
                <img src={spinner} alt="loading" /> : null}
        </div>
    );
}

export default ProductByCategory;