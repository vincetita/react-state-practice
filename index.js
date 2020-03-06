import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick=this.handleClick.bind(this)
    this.state = {
      name: 'React'
    };
  }
  handleClick(){
    this.setState({
      name: "Angular"
    })
  }

   handleClick2=()=>{
    this.setState({
      name: "Nodejs"
    })
   }
  render() {
    
  
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.handleClick}>Click Me</button> <br/> <br/>
        <button onClick={this.handleClick2}>Click Me2</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
