import React,{Component} from 'react'
import './Person.css'

class Person extends Component{
constructor(props){
    super(props);
    this.state={
    user:{
        fullName:"Asma Chihi",
        bio:"Etudiante chez Go My Code",
        profession:"Développeuse Web Junior",
        imgSrc:"",
        date: new Date()
    }
    }
    }
    componentDidMount(){this.timerID=setInterval(()=>this.tick(),1000);}
    
    componentWillUnmount(){clearInterval(this.timerID);}
    
    tick() {this.setState({date:new Date()});}

  render(){
    return(
    <div className="Person">
        <h2>Votre Profil</h2>
           <h3>Full Name : {this.state.user.fullName}  </h3>
           <h3>Bio : {this.state.user.bio}  </h3>
           <h3>Profession : {this.state.user.profession}  </h3>
          <h2>Le temps passé est :{this.state.date.toLocaleTimeString()}</h2>
        </div>
    )}
}

export default Person