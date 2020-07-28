import React, {Component} from 'react';
import './index.css';

class MyCalc extends Component {
    constructor() {
        super();
        this.state ={
            input_1: 0,
            input_2: 0,
            output: ''
        }
        this.output = null;
    }
    componentDidMount(){
        this.output = document.getElementById('output');
    }
    insert = (num) => {
        this.output.value = this.output.value + num;
    }
    equal = () => {
        let exp = this.output.value;
        if (exp){
            try {
                this.output.value = eval(this.output.value);
            } catch (e) {
                this.output.value = 'ошибка'
            }
        }
    }
    clean = () => {
        this.setState({
            output: ''
        })
        document.getElementById('output').value = this.state.output;
    }
    back = () => {
        //this.setValueOutput();
        document.getElementById('output').placeholder = '';
        let exp = this.output.value;
        this.output.value = exp.substring(0, exp.length-1);
    }
    onChangeHandler = (input) => (e) => {
        let value = e.target.value;
        try {
            value = parseInt(value)
        } catch (e) {
            value = 0;
        }
        if (isNaN(value)) value=0;
        this.setState({
                [input]: value
            }, ()=>{
                this.setState({
                    output: this.sum()
                })
            }
        )
    }
    setValueOutput = () => {
        this.setState({
            output: this.sum()
        }, () => document.getElementById('output').value = this.state.output)
    }
    setValueOutputDefault = () => {
        this.setState({
            output: ''
        }, () => document.getElementById('output').value = '')

    }
    sum = () => {
        try {
            return  parseInt(this.state.input_1) +  parseInt(this.state.input_2);
        } catch (e) {
            return 'ошибка';
        }
    }

    render() {
        return (
            <div className="bg">
                <div className="main">
                    <form name="form">
                        <input id="input_1" type="number" className="textview inline-block" onClick={this.setValueOutputDefault} onChange={this.onChangeHandler("input_1")} />
                        <input id="input_math" className="butt" type="button" value="+" onClick={this.setValueOutput}/>
                        <input id="input_2" type="number" className="textview inline-block" onClick={this.setValueOutputDefault} onChange={this.onChangeHandler("input_2")}  />
                        <input id="output" className="textview" placeholder={this.state.output}
                            /* onClick={(e)=>e.target.value = e.target.placeholder} */ />
                    </form>
                    <table>
                        <tbody>
                        <tr>
                            <td><input className="butt" type="button" value="C" onClick={this.clean}/></td>
                            <td><input className="butt" type="button" value="<" onClick={this.back}/></td>
                            <td><input className="butt" type="button" value="/" onClick={()=>this.insert('/')}/></td>
                            <td><input className="butt" type="button" value="X" onClick={()=>this.insert('*')}/></td>
                        </tr>
                        <tr>
                            <td><input className="butt" type="button" value="7" onClick={()=>this.insert(7)}/></td>
                            <td><input className="butt" type="button" value="8" onClick={()=>this.insert(8)}/></td>
                            <td><input className="butt" type="button" value="9" onClick={()=>this.insert(9)}/></td>
                            <td><input className="butt" type="button" value="-" onClick={()=>this.insert('-')}/></td>
                        </tr>
                        <tr>
                            <td><input className="butt" type="button" value="4" onClick={()=>this.insert(4)}/></td>
                            <td><input className="butt" type="button" value="5" onClick={()=>this.insert(5)}/></td>
                            <td><input className="butt" type="button" value="6" onClick={()=>this.insert(6)}/></td>
                            <td><input className="butt" type="button" value="+" onClick={()=>this.insert('+')}/></td>
                        </tr>
                        <tr>
                            <td><input className="butt" type="button" value="1" onClick={()=>this.insert(1)}/></td>
                            <td><input className="butt" type="button" value="2" onClick={()=>this.insert(2)}/></td>
                            <td><input className="butt" type="button" value="3" onClick={()=>this.insert(3)}/></td>
                            <td rowSpan="5"><input style={{height : '106px'}} className="butt" type="button" value="=" onClick={this.equal}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input style={{width: '106px'}} className="butt" type="button" value="0" onClick={()=>this.insert(0)}/></td>
                            <td><input className="butt" type="button" value="." onClick={()=>this.insert('.')}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default MyCalc;
