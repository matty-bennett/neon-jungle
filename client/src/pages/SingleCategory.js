import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';

import spinner from '../assets/spinner.gif';
import Cart from '../components/Cart';
import { QUERY_CATEGORIES } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';
import { idbPromise } from '../utils/helpers';
import { UPDATE_CATEGORIES } from '../utils/actions';
import ProductByCategory from '../components/ProductByCategory';

function SingleCategory() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const [currentCategory, setCurrentCategory] = useState({});
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const { categories } = state;

    useEffect(() => {
        if (categories.length) {
            setCurrentCategory(categories.find(category => category._id === id));
        }

        else if (data) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: data.categories
            });

            data.categories.forEach((category) => {
                idbPromise('categories', 'put', category)
            });
        }

        else if (!loading) {
            idbPromise('categories', 'get').then((indexedCategories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: indexedCategories
                });
            });
        }
    }, [categories, data, loading, dispatch, id]);

    return (
        <>
            {currentCategory ? (
                <div>
                    <Link to="/categories">
                        ← Back to All Categories
                    </Link>

                    <h2>{currentCategory.name}</h2>

                    <ProductByCategory />
                </div>
            ) : null}
            {
                loading ? <img src={spinner} alt="loading" /> : null
            }
            <Cart />
        </>
    )
}

export default SingleCategory;