import './App.css';
import Child from './component/Child';
import { Component } from "react";
import nombres from "./resources/names.json";



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      contador: 1
    }
  }
  agregarTarjeta() {
    this.state.items.push({id:this.state.contador,nombre:nombres[Math.floor(Math.random()*nombres.length)]});
    this.setState({contador: this.state.contador + 1, items: this.state.items});
   
  }

  borrarTarjeta(idTarjeta){
   let resultado = this.state.items.filter((item)=>{
      return item.id !== idTarjeta;
    })
    this.setState({items:resultado})
  console.log("tarjeta a borrar:"+ idTarjeta);
  }


  render(){
  return (
    <div className="App">
      <div>Id item a generar:{this.state.contador}</div>
      <button onClick={this.agregarTarjeta.bind(this)}>Agregar</button>
      {
        this.state.items.map((item)=> {
          return  <Child onDelete={this.borrarTarjeta.bind(this)} key={item.id} id={item.id} name={item.nombre}/>
        }
        )
      }
     
     

    </div>
  );
  }
}


  


