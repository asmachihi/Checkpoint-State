import React,{Component} from 'react'
import Button from 'react-bootstrap/Button'
import Person from './Component/Person.js'
import Img from './assets/img.jpg'
import './App.css';

class App extends Component {
   state={
     show: false,
     input:""
   }
  render(){
  return (
    <div className="App">
      <Button className="Button" variant="outline-secondary" onClick={()=>this.setState({show:!this.state.show})}>
      {this.state.show ? "Masquez le profil":" Montrez le profil"}
        </Button>
       
       {
         this.state.show && <Person> <img src={Img} alt="img"/></Person>
       }
       
    </div>
  );
}
}
export default App;
