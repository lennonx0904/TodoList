import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <form onSubmit = {this.props.addTodoHandler}>
            <input className='input' type='text' 
            placeholder = 'todo...' 
            value = {this.props.text}
            onChange = {this.props.changeTextState}
            />
            <button className='add'>Add</button>        
            </form>
        )
    }

    
    

}


export default Input;