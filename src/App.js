import React, {Component} from 'react';

let styles = {
    textAlign: "center",
    paddingTop: '10px',
    color: 'green'
};




class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
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
                <button onClick={this.click}>
                    Add counter
                </button>
            </>
        );
    }
}


export default App;
