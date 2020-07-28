import React, {Component} from 'react';
import Timer from './Timer';
import './index.css';

class MyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTimer: true
        }
    }
    toggleTimer = () => {
        this.setState({
            showTimer: !this.state.showTimer
        })
    }
    render() {
        const { showTimer } = this.state;
        return (
            <>
                <button onClick={this.toggleTimer}>
                    { showTimer ? 'Скрыть' : 'Показать'} таймер
                </button>
                { showTimer && <Timer />}
            </>
        );
    }
}


export default MyTimer;
