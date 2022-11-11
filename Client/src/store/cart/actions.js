import { cartActions } from "."

import { cart } from "../../utils/dummyData";

// Action Creators (THUK)
export const fetchCartData = () => {
    return async (dispatch) => {
        await dispatch(cartActions.setCart(cart));
    };
};
