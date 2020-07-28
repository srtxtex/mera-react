import { setOrderList } from '../actionCreators/orderList';

const getOrderList = () => {
    return (dispatch) => {
        fetch("/data/items.json")
            .then(res => res.json())
            .then(data => {
                dispatch(setOrderList(data.items))
            });
    }
}
/*
const getOrderList = () => {
  return async (dispatch) => {
    let response = await fetch('/data/items.json');
    response = await response.json();
    dispatch(setOrderList(response.items))
  }
}
*/

export { getOrderList };