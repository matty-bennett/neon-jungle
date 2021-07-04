import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Button from 'react-bootstrap/Button';

import Product from '../Product';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from "../../assets/spinner.gif";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function Category() {
    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            //store in the global state object
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            //also save each product to IndexedDB
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            //retrieve data from 'products' store since we're offline
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products
                });
            });
        }
    }, [data, loading, dispatch]);

    function filterProducts() {
        if (!currentCategory) {
            return state.products;
        }

        return state.products.filter(product => product.category._id === currentCategory);
    }

    return (
        <div >
            <div className="d-flex flex-row justify-content-center">
                <h2>Category Name</h2>
                <Button className="button-primary">Filter</Button>
                <Button className="button-primary">Sort</Button>
            </div>
            {state.products.length ? (
                <div>
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
                <h3>Sorry, there are no products in this category yet!</h3>
            )}
            {loading ?
                <img src={spinner} alt="loading" /> : null}
        </div>
    );
};

export default Category;