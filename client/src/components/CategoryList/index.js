import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Category from '../Category';
import { QUERY_CATEGORIES } from '../../utils/queries';
import spinner from "../../assets/spinner.gif";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

function CategoryList() {
    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
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

    function filterCategories() {
        if (!currentCategory) {
            return state.categories;
        }

        return state.categories.filter(category => category._id === currentCategory);
    }

    return (
        <div >
            <h2>Categories:</h2>
            {state.categories.length ? (
                <div>
                    {filterCategories().map(category => (
                        <Category
                            key={category._id}
                            _id={category._id}
                            // image={product.image}
                            name={category.name}
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

export default CategoryList;