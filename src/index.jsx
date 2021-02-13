import React,{Component} from 'react'
import ReactDom from 'react-dom'
import Todo from './todo-app/Todo.jsx'

class App extends Component {	

	constructor(props){
		super(props);
		this.state = {
		}
	}	


	render() {
		return (
			<div>
				<Todo/>
			</div>
		);
	}
}

ReactDom.render(
		<App/>,document.getElementById('root')
)