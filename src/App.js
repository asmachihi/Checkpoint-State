import React,{Component} from 'react'
import Button from 'react-bootstrap/Button'
import Person from './Component/Person.js'

import './App.css';

class App extends Component {
   state={
     show: false,
   }
  render(){
  return (
    <div className="App">
      <Button className="Button" variant="outline-secondary" onClick={()=>this.setState({show:!this.state.show})}>
      {this.state.show ? "Masquez le profil":" Montrez le profil"}
        </Button>
       {
         this.state.show && <Person/>
       }       
    </div>
  );
}
}
export default App;
