import * as types from './../constants/ActionType';
import {
    findIndex
} from 'lodash';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var {
        product,
        quantity,
        item
    } = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findIndex(state, (item) => {
                return item.product.id === product.id;
            });
            if (index === -1) {
                state.push({
                    product,
                    quantity
                });
            } else {
                state[index].quantity += quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            var index = findIndex(state, (index) => {
                return index.product.id === item.product.id;
            });
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            var index = findIndex(state, (item) => {
                return item.product.id === product.id;
            });
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

export default cart;