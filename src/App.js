import './App.css';
import Child from './component/Child';
import { Component } from "react";
//import nombres from "./resources/names.json";



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      contador: 1
    }
  }
componentDidMount(){
  
    fetch('https://randomuser.me/api/?results=3&inc=name,login')
    .then(result=>result.json())
    .then(data=> {
      this.setState({items:data.results});
      console.log(data.results);
    })
  
     
   
}
     


  agregarTarjeta() {

    fetch('https://randomuser.me/api/?inc=name,login')
    .then(result=>result.json())
    .then(data=> {
      this.state.items.push(data.results[0]);
      this.setState({items: this.state.items});
      console.log(data.results);

   
  })
  }

  borrarTarjeta(idTarjeta){
   let resultado = this.state.items.filter((item)=>{
      return item.login.uuid !== idTarjeta;
    })
    this.setState({items:resultado})
  console.log("tarjeta a borrar:"+ idTarjeta);
  }
  
  borrarTarjetas () {
    this.setState({items:[]});
  }


  render(){
  return (
    <div className="App">
      <div>Id item a generar:{this.state.contador}</div>
      <button onClick={this.agregarTarjeta.bind(this)}>Agregar</button>
      <button onClick={this.borrarTarjetas.bind(this)}>Borrar todo!</button>
      {
        this.state.items.map((item)=> {
          return  <Child onDelete={this.borrarTarjeta.bind(this)}
           key={item.login.uuid} id={item.login.uuid}
            name={item.name.first}
            lastname={item.name.last}/>
        }
        )
      }
     
     

    </div>
  );
  }
}


  


