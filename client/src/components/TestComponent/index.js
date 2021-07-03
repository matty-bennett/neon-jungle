import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { idbPromise } from '../../utils/helpers';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_CATEGORIES } from "../../utils/queries";


function AvailabilityMenu() {
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        //if categoryData exists or has changed from the response of useQuery, 
        //---then run dispatch()
        if (categoryData) {
            //execute our dispatch function w/our action object indicating the type of
            //---action & the data to set out state for categories to
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };

    return (
        <>
            {categories.map(item => (
                <NavDropdown.Item
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >   <Link className="navlink" to={`/category/${item._id}`}>
                        {item.name}
                    </Link>
                </NavDropdown.Item>
            ))}
        </>
    );
}

export default AvailabilityMenu;