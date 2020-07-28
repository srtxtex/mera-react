import React, {Component} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import Main from './components/Main'
import MyCalc from './components/MyCalc'
import MyTimer from './components/MyTimer'
import MyTracking from './components/MyTracking'
import MyTodo from './components/MyTodo'
import MyResize from './components/MyResize'



class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <Link to={'/'}>
                        На главную
                    </Link>
                </header>
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/calc'} component={MyCalc}/>
                    <Route path={'/timer'} component={MyTimer}/>
                    <Route path={'/tracking'} component={MyTracking}/>
                    <Route path={'/todo'} component={MyTodo}/>
                    <Route path={'/resize'} component={MyResize}/>
                    <Route path={'*'} component={Main}/>
                </Switch>
            </div>
        );
    }
}


export default App;
