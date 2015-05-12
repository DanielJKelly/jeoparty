import React from 'react';

let { PropTypes } = React;

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'TodoItem';
    this.propsTypes = {      
      todo: PropTypes.object.isRequired
    };    
    this.state = {
      isEditing: false
    };
  }

  render() {    
    return (
      <li>
        {this.props.todo.text}
      </li>
    );
  }
 
};

export default TodoItem;