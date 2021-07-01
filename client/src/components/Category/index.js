import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Product from '../Product';
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from '../../utils/queries';
import spinner from "../../assets/spinner.gif";


function Category({ currentCategory }) {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];

    // const { data } = useQuery(QUERY_CATEGORIES);
    // const category = data?.category;

    function filterProducts() {
        if (!currentCategory) {
            return products;
        }

        return products.filter(product => product.category._id === currentCategory);
    }

    return (
        <div >
            <div className="d-flex flex-row justify-content-center">
                <h2>Category Name</h2>
                <div>Filter</div>
                <div>Sort</div>
            </div>
            {products.length ? (
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