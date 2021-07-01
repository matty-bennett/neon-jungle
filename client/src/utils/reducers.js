import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        // depending on the action type value, return a new state object with an updated array or value

        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
};