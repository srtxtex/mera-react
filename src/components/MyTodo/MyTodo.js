import React from 'react';
import { getOrderList } from '../store/actionsAsync/orderList';
import { setOrderList, addToOrderList, removeFromOrderList, editListItem } from '../store/actionCreators/orderList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList
    }
}

const mapDispatchToProps = () => {
    return (dispatch) => {
        return {
            getOrderList: bindActionCreators(getOrderList, dispatch),
            setOrderList: bindActionCreators(setOrderList, dispatch),
            addToOrderList: bindActionCreators(addToOrderList, dispatch),
            removeFromOrderList: bindActionCreators(removeFromOrderList, dispatch),
            editListItem: bindActionCreators(editListItem, dispatch),
        }
    }
}

class MyTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            editIndex: null
        }
    }

    async getItems() {
        const { setOrderList } = this.props
        let response = await fetch('/data/items.json');
        response = await response.json();

        setOrderList(response.items);
    }
    componentDidMount() {
        const { getOrderList } = this.props;
        getOrderList();

        //this.getItems();
    }

    closeEdit = () => {
        this.setState({editIndex: null})
    }

    render() {
        const { orderList, addToOrderList, removeFromOrderList, editListItem } = this.props;

        return (
            <div>
                <input
                    value={this.state.itemName}
                    onChange={(e) => this.setState({itemName: e.target.value})}
                />
                <button onClick={() => addToOrderList(this.state.itemName)}>
                    Добавить элемент
                </button>
                {orderList.map((orderItem, index) => (
                    <div
                        key={orderItem.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <div>
                            <p>
                                {orderItem.name}
                            </p>
                            {(index === this.state.editIndex) &&
                            <form onSubmit={this.closeEdit}>
                                <input
                                    value={orderItem.name}
                                    onChange={(e) => editListItem(index, e.target.value)}
                                    onBlur={this.closeEdit}
                                />
                            </form>
                            }
                        </div>
                        <div style={{marginLeft: '10px'}}>
                            <button onClick={() => this.setState({editIndex: index})}>Редактировать</button>
                        </div>
                        <div style={{marginLeft: '10px'}}>
                            <button onClick={() => removeFromOrderList(index)}>Удалить</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTodo);