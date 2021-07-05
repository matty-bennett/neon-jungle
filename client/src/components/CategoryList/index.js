import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { QUERY_CATEGORIES } from '../../utils/queries';
import spinner from "../../assets/spinner.gif";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function CategoryList() {
    const [state, dispatch] = useStoreContext();
    const { loading, data } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (data) {
            //store in the global state object
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: data.categories
            });

            //also save each product to IndexedDB
            data.categories.forEach((category) => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            //retrieve data from 'products' store since we're offline
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [data, loading, dispatch]);

    return (
        <div className="container">
            <h2 className="product">Categories:</h2>
            {state.categories.length ? (
                <div className="flex-row justify-content-around">
                    {state.categories.map(category => (
                        <Link className="category-btn" to={`/categories/${category._id}`}
                            key={category._id}
                            _id={category._id}
                            // image={product.image}
                            name={category.name}
                        >
                            <h2>{category.name}</h2>
                        </Link>

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

export default CategoryList;