import React, { Component } from 'react';

export class State extends Component {
    constructor(props){
		super(props)
		this.state={
			counter:0,
			// for count until 10
			boundary:10
		}
	
	}
	
	// this.setState() funcrion takes a callback function for async setting state

	increment=()=>{
		this.setState({
			counter:this.state.counter+1
		})
	}
	
	decrement=()=>{
		this.setState({
			counter:this.state.counter-1
		})
	}
	
	
    render() {
		// const variableName = condition ?(if) operation :(else) opearation
		const infoText = this.state.boundary<this.state.counter ? 'Attention' : 'Run run run'
		return(
			<div>
				<h1
					style={{"color":"red","fontWeight":"bold","textTransform":"uppercase"}}
				>
					Go Until 10 Game
				</h1>
				<h1>{this.state.counter}</h1>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                <br></br><br></br>
				<span>
					<b>
						{infoText}:{this.state.boundary-this.state.counter}
					</b>	
				</span>
			</div>
		)
    }
}
 