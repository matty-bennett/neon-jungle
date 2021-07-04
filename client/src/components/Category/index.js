import React from 'react';
import { Link } from 'react-router-dom';

// import spinner from "../../assets/spinner.gif";
// import { useStoreContext } from '../../utils/GlobalState';
// import { idbPromise } from '../../utils/helpers';

function Category(item) {
    const {
        _id,
        name
    } = item;

    return (
        <div >
            <Link to={`/categories/${_id}`}>
                {/* <img
                    alt={name}
                    src={`/images/${image}`}
                /> */}
                <h2>{name}</h2>
            </Link>
        </div>
    );
};

export default Category;