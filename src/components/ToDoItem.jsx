import React from 'react';

class ToDoItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.text}
            </li>
        )   
    }
}


export default ToDoItem; 
