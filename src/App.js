import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
   super(props)
   this.state = {
     hometown: ''
   }
 }

 handleUpdate(event){
    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  }

  handleSubmit(event){
     this.props.userDataUpdated(this.state)
     event.preventDefault()
   }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <h3>Text Input</h3>
          <label>Name</label>
          <br />
          <input
            name='hometown'
            value={this.state.hometown}
            onChange={this.handleUpdate.bind(this)}
          />
          <br />
          <label>Description</label>
          <br />
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleUpdate.bind(this)}
          />
          <br />
          <label>Selection</label>
          <br />
          <select
            name='pet'
            value={this.state.pet}
            onChange={this.handleUpdate.bind(this)}
          >
            <option></option>
            <option value='Dog'>Dog</option>
            <option value='Cat'>Cat</option>
          </select>
          <br />
          <label>Radio Buttons</label>
          <br />
          <input
            type='radio'
            name='education'
            value="High School"
            checked={this.state.education === 'High School'}
            onChange={this.handleUpdate.bind(this)}
          />
          High School
          <br />
          <input
            type='radio'
            name='education'
            value="College"
            checked={this.state.education === 'College'}
            onChange={this.handleUpdate.bind(this)}
          />
          College
          <br />
          <label>Check Boxes</label>
        
        </form>
      </div>
    );
  }
}

export default App;
