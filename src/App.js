import React, {Component} from 'react';
import Button from './components/button/button'

let styles = {
    textAlign: "center",
    paddingTop: '10px',
    color: 'green'
};




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
            a: 'My button'
        }
    }
    click = () => {
        this.setState({
            counter:  this.state.counter + 1
        })

        console.log(this.state.counter)
    }
    render() {
        return (
            <>
                <div id={this.state.counter}
                style={styles}>
                    {this.state.counter}
                </div>
                <Button
                    myText={`Hello ${this.state.counter}`}
                    onClick={this.click}
                >
                    {this.state.a} {this.state.counter}
                </Button>
            </>
        );
    }
}


export default App;
