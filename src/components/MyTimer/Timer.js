import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state ={
            time: this.msToTime(0),
            timerId: null,
            results: []
        };
        this.timerStep = 10;
    }
    msToTime = (s) => {
        const ms = s % 1000;
        s = (s - ms) / 1000;
        const secs = s % 60;
        s = (s - secs) % 60;
        const mins = s % 60;
        const hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs + '.' + ms;
    }

    startStopTimer = () => {
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
            this.setState({
                timerId: null,
                results: [...this.state.results, this.state.time]
            });
        } else {
            let ms = this.timerStep;
            const timerId = setInterval(() => {
                this.setState({
                    time: this.msToTime(ms)
                });
                ms += this.timerStep;
            }, ms);
           this.setState({
               timerId
           })
        }
    }

    render() {
        const {time, timerId, results} = this.state;
        return (
            <div>
                <div>{time}</div>
                <button onClick={this.startStopTimer}>
                    { timerId ? 'Остановить' : 'Запустить'} таймер
                </button>
                <div>
                    <p>Результаты</p>
                    <div>
                        {results.map( result => <p key={result}>{result}</p>)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Timer;
