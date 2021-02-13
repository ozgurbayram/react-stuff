import React,{Component} from 'react'
import ReactDom from 'react-dom'

const FnwSample = (props) =>(
    <div className="fnw">
        <h1>Function Based View Works</h1>
        <span>
            <b>Name prop is:</b>{props.name}
        </span>
        <br/>
    </div>
)

class ClassBasedComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="cbc">
                <h1>Class Based Component Works:</h1>
                <br/>
                <span>
                    <b>Name of Prop is:</b>{this.props.name}
                </span>
            </div>
        )
    }
}

class App extends Component{
    constructor(props){
        super(props)
	}
    
    render(){
        return(
            <div className="App" style={style.App}>
                <FnwSample name={'Function based cmp prop'} color="red"/>
                <br/>
                <ClassBasedComponent name="Class Based View prop"/>
            </div>
        )
    }
}


const style = {
    App:{
        "fontFamily":'arial',
    },
}
