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
            <div className="showTimer">
                <button onClick={this.toggleTimer}>
                    { showTimer ? 'Скрыть' : 'Показать'} таймер
                </button><br />
                { showTimer && <Timer />}
            </div>
        );
    }
}


export default MyTimer;
