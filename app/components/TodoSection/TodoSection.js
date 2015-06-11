import React from 'react';

import TodoItem from './TodoItem';
import TodoTextInput from './TodoTextInput';
import TodoSnapshots from './TodoSnapshots';

import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import SnapshotStore from '../../stores/SnapshotStore';

export default class TodoSection extends React.Component {
  constructor() {
    super();
    this.state = TodoSection.getDataState();
  }

  componentDidMount() {
    AppStore.listen(this._onChange.bind(this));
    SnapshotStore.listen(this._onChange.bind(this));
  }

  componentWillUnmount() {
    AppStore.unlisten(this._onChange.bind(this));
    SnapshotStore.unlisten(this._onChange.bind(this));
  }

  render() {
    let allTodos = this.state.allData,
        todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <div>
        <h1>TODO PAGE</h1>
        <div className='todo'>
          <p>First add some tasks by pressing enter key</p>
          <TodoTextInput className='edit' id='new-todo' placeholder='What needs to be done ?' onSave={this._onSave.bind(this)} value='' />
          <ul id='todo-list'>{todos}</ul>
        </div>
        <TodoSnapshots snapshots={this.state.snapshots} />
      </div>
    );
  }

  _onChange() {
    this.setState(TodoSection.getDataState());
  }

  _onSave(text) {
    if (text.trim()){
      AppActions.create(text);
    }
  }

  // CALL STORE UTILS
  static getDataState() {
    return {
      allData: AppStore.getState().data,
      areAllComplete: AppStore.areAllComplete(),
      snapshots: SnapshotStore.getState().snapshots
    };
  }
}

TodoSection.prototype.displayName = 'TodoSection';