
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    person :{
      FullName:"Angham Yaacoubi" ,
      Bio :23 ,
      Profession : 'DC' ,
      imageT : "/page-2.jpeg",

    },
    show:false,
    count : 0
    

     
    }
  }
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)}

  render(){
    return(
      <div>
        
            <button onClick={()=> this.setState({show:!this.state.show ,count:this.state.count=0})}>Show content</button>
            {this.state.show &&
             <div>
                  <img  src={this.state.person.imageT} style={{width:"300px"}}></img>
                  <h1>{this.state.person.FullName}</h1>
                  <h2>{this.state.person.Bio}</h2>
                  <h3>{this.state.person.Profession}</h3>
                  <h1>{this.state.count}</h1>
             </div> }
      </div>
  

    )
  }
}

export default App;
