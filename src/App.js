import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  state={
    newItem:""
    ,list:[]
  }
  addItem= () => {
    const ni={
      id : 1+Math.random() ,
      value : this.state.newItem
    }
    const nl=[...this.state.list,ni]
    this.setState({
      list : nl,
      newItem:""
    })
  }
  updateItem =(e)=>{
    this.setState({
      newItem : e.target.value 
    })
  }
  resetItems =() =>{
    this.setState({
      list:[]
    })
  }
  resetItem =(id) =>{
    const nl=[...this.state.list];
    const unl = nl.filter( i => i.id!==id);
    this.setState({
      list : unl
    });
  } 
  render(){
    return (
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                Home <span class="sr-only">(current)</span>
              </li>
              

            </ul>
        </div>
        </nav>
        <br/>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">Add an Item....</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
              placeholder="Enter new item here"
              value={this.state.newItem}
              onChange={(event)=>this.updateItem(event)}
            />
            <button class="input-group-text"  //type="button" class="btn btn-secondary"
              onClick={()=>this.addItem()}
            > ADD </button>
        </div>

        <ul class=" list-group">{
            this.state.list.map(  (l) => 
            <li class="list-group-item" key={l.id}>
              {l.value}
              <button 
               onClick={()=>  this.resetItem(l.id)}
               type="button" class="btn btn-outline-light"
               >DELETE</button>
            </li>  )
        }</ul>
        <br/>
        <Button variant="warning" onClick={()=> this.resetItems()}>
        Reset All 
        </Button>
        <br/>  <br/>
        <nav2 class="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  Made By : Anish Aggarwal
                </li>
              </ul>
          </div>
        </nav2>

        
      </div>
    );
  }
}

export default App;
