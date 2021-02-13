import React, { Component } from 'react';
import { State } from "../step-2-state/State.jsx";

class LifeCycle extends Component {
    state={
        text:true
    }

    componentWillUnmount(){
        console.log('Unmounting');
    }

    componentDidMount(){
        console.log('Mounting');
    }   

    chance=()=>{
        this.setState({text:!this.state.text})
    }
    render() {
        if (this.state.text==true) {
            return(
                <div>
                    <span>True</span>
                    <button onClick={this.chance}>chance</button>
                </div>
            )
        }
        else{
            return (
                <State/>
            );
            }
    }
}

export default LifeCycle;
