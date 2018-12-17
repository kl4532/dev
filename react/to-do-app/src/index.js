import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      toDoList: [],
      checked: [],
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleDelAll = this.handleDelAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkHandle = this.checkHandle.bind(this);
  }
  handleAdd() {
    const newTask = this.state.userInput;
    if(newTask!==''){
      if(!this.state.toDoList.includes(newTask)){
        this.setState(prevState => ({
          toDoList: [...prevState.toDoList, newTask],
          userInput: '',
            }))
            this.setState(prevState => ({
              checked: [...prevState.checked, false],
                }))
      }else alert(newTask + " is alredy on your list...");
    }
  }
  handleDel(item, index){
    this.state.checked.splice(index, 1);
      this.setState({
        checked: this.state.checked,
      });
  let filteredArray = this.state.toDoList.filter(i=> i !== item);
    this.setState({
      toDoList: filteredArray,
    });
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
  checkHandle(gIndex){
    this.setState({
     checked: this.state.checked.map((item, index) =>{
       if(gIndex === index){  //mapping checkboxed array. For selected checkbox change value of checked for opposite
         return !item;
       } else return item;
     })
   })
  }
  render() {
    const items = this.state.toDoList.map((item, index) => {
      return <div key={item} className = 'item'>
        <li>
            <button  value={item} onClick={() => this.handleDel(item, index)} className="itemBtn">X</button>
              {this.state.checked[index] ?<div style={{textDecoration: "line-through"}}>{item}</div>: item}
            <input className="checkbox" type="checkbox" checked={ this.state.checked[index] } onChange={ () => this.checkHandle(index)}/>
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
