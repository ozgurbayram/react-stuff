import React,{Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component {	

	constructor(props){
		super(props);
		this.state = {
		}
	}	


	render() {
		return (
			<div>	
			</div>
		);
	}
}

ReactDom.render(
		<App/>,document.getElementById('root')
)