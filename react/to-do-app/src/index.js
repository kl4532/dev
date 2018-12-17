import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      toDoList: [],
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleDelAll = this.handleDelAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkHandle = this.checkHandle.bind(this);
  }
  handleAdd() {
    const newTask = this.state.userInput;
    let isAlredy = false;
    this.state.toDoList.map(item => {     // I need to check if there is alredy task equal to newTask in one of toDoList elements
      !isAlredy ? (item.task === newTask ? isAlredy=true : isAlredy=isAlredy) : isAlredy=isAlredy;
    })
    if(newTask!==''){
      if(!isAlredy){  // includes method works only for simple elements in array, not objects
        this.setState(prevState => ({
          toDoList: [...prevState.toDoList, {task: newTask, checked: false}],
          userInput: '',
            }))
      }else alert(newTask + " is alredy on your list..." + "list:");
    }
  }
  handleDel(index){
  this.state.toDoList.splice(index, 1);
  this.forceUpdate();
}
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  handleDelAll(){
    this.setState({
      toDoList: [],
      checked: [],
    });
  }
  enterPressed(event){
    var code = event.keyCode || event.which;
   if(code === 13) {
     this.handleAdd();
   }
  }
  checkHandle(index){
    this.state.toDoList[index].checked = !this.state.toDoList[index].checked;
    this.forceUpdate();
  }
  render() {
    const items = this.state.toDoList.map((item, index) => {
      return <div key={item.task} className = 'item'>
        <li>
            <button  value={item.task} onClick={() => this.handleDel(index)} className="itemBtn">X</button>
              {item.checked ?<div style={{textDecoration: "line-through"}}>{item.task}</div>: item.task}
            <input className="checkbox" type="checkbox" checked={ item.checked } onChange={ () => this.checkHandle(index)}/>
        </li>
      </div>
    });
    return (
      <div className="frame">
        <input
          onChange={this.handleChange}
          value={this.state.userInput}
          onKeyPress={this.enterPressed.bind(this)}/>
        <button onClick={this.handleAdd}>Add task</button>
        <button onClick={this.handleDelAll}>Remove all tasks</button>
        <div className="items">
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <MyToDoList />,
  document.getElementById('root')
);
