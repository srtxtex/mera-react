import React, {Component} from 'react';
//import App from './App';
//import plus from './components/myComponent'
//import MyCalc from './components/MyCalc'
//import MyTimer from './components/MyTimer'
//import MyTracking from './components/MyTracking'
import MyTodo from './components/MyTodo'
import MyResize from './components/MyResize'

/*
<MyTimer />,
<MyCalc />,
<MyTracking />,
<MyTodo />
<MyResize />,
 */

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <MyTodo />

            </div>
        );
    }
}


export default App;
