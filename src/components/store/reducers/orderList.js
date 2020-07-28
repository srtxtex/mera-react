import {SET_ORDER_LIST, ADD_TO_ORDER_LIST, REMOVE_FROM_ORDER_LIST, EDIT_LIST_ITEM} from '../actions/orderList';

const initialState = [];

function orderList(state = initialState, action) {
    switch(action.type) {
        case SET_ORDER_LIST:
            return [...action.payload.list];
        case ADD_TO_ORDER_LIST:
            return [{name: action.payload.name, id: state.length + 1}, ...state];
        case REMOVE_FROM_ORDER_LIST:
            return [
                ...state.slice(0, action.payload.index),
                ...state.slice(action.payload.index + 1)
            ];
        case EDIT_LIST_ITEM:
            return [
                ...state.slice(0, action.payload.index),
                {...state[action.payload.index], name: action.payload.name},
                ...state.slice(action.payload.index + 1)
            ];
        default:
            return state;
    }
}

export { orderList }