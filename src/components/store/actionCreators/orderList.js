import {SET_ORDER_LIST, ADD_TO_ORDER_LIST, REMOVE_FROM_ORDER_LIST, EDIT_LIST_ITEM} from '../../store/actions/orderList';

const setOrderList = (list) => ({type: SET_ORDER_LIST, payload: {list}});
const addToOrderList = (name) => ({type: ADD_TO_ORDER_LIST, payload: {name}});
const removeFromOrderList = (index) => ({type: REMOVE_FROM_ORDER_LIST, payload: {index}});
const editListItem = (index, name) => ({type: EDIT_LIST_ITEM, payload: {index, name}});

export { setOrderList, addToOrderList, removeFromOrderList, editListItem }