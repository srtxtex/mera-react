import React, {Component} from 'react';
import './index.css';

class MyTracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
            left: 0
        }
    }

    handleMoveMouse = (e) => {
        e.persist();
        this.setState({
            top: e.pageY,
            left: e.pageX
        });
    }

    render() {
        const { top, left } = this.state;

        return (
            <div className="warp" onMouseMove={this.handleMoveMouse}>
                <div className="move" style={{
                    top,
                    left
                }}>
                    top {top}, left {left}
                </div>
            </div>
        );
    }
}

export default MyTracking;