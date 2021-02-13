import React, { Component } from 'react';


class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            todoText:'',
            todos:[{id:0,text:'inital todo',isDone:false}]        

        }
    }

    // updates state of todoText for input value
    handleChance=(e)=>{
        this.setState({todoText:e.target.value})
    }

    // creates tod 
    handleSubmit=()=>{
        if (this.state.todoText=='') 
        {
            return;
        }
        else
        {
            const newTodo = {id:this.state.todos.length,text:this.state.todoText,isDone:false}            
            this.setState({
                todos:this.state.todos.concat(newTodo),
                todoText:''
            })
        }   
    }

    // updates status isDone
    doneTodo=(t)=>{
        // create copy of current state
        const updateState = this.state.todos
        // update copy state
        updateState[t.id].isDone = !updateState[t.id].isDone
        
        //set copy state to current state 
        this.setState({
            todos:updateState
        },console.log(this.state.todos))
        // logic in above could be more efficent but i couldn't find another way to do it.
    }    
    
    render() {
        return (
            <div>
                <div>
                    <h2>TodoApp</h2>
                </div>
                <input type="text" placeholder='Todo Name' onChange={this.handleChance} value={this.state.todoText}/>
                <button onClick={this.handleSubmit}>Add</button>
                <TodoList doneTodo={this.doneTodo} todos={this.state.todos}/>
            </div>
        );
    }
}


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render() {
        return (
            <ul>
                {
                this.props.todos.map(todo=>{
                    return(
                        <div key={todo.id}>
                            <li key={todo.id}>
                                <span style={todo.isDone ? {color:'black'}:{color:'salmon'}} key={todo.id}>{todo.text}</span>
                                <button onClick={()=>{this.props.doneTodo(todo)}}>Done</button>
                            </li>
                        </div>
                    )
                })
                }
            </ul>                
            
        );
    }
}

export default Todo;