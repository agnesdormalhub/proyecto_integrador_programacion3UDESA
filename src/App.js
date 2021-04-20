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
  
    fetch('https://randomuser.me/api/?results=20 ')
    .then(result=>result.json())
    .then(data=> {
      this.setState({items:data.results});
      console.log(data.results);
    })
  
     
   
}
     


  agregarTarjeta() {

    fetch('https://randomuser.me/api/')
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
      <div class="botones">
        <button class="agregar" onClick={this.agregarTarjeta.bind(this)}>Agregar</button>
        <button class="borrar" onClick={this.borrarTarjetas.bind(this)}>Borrar todo!</button>
      </div>
      {
        this.state.items.map((item)=> {
          return <Child onDelete={this.borrarTarjeta.bind(this)}
            key={item.login.uuid}
            id={item.login.uuid}
            name={item.name.first}
            lastname={item.name.last}
            image={item.picture.medium}
            email={item.email}
            birthdate={item.dob.date}
            age={item.dob.age}
            street={item.location.street.name}
            street_number={item.location.street.number}
            city={item.location.city}
            state={item.location.state}
            country={item.location.country}
            postcode={item.location.postcode}
            phone={item.phone}
            registered={item.registered.date}
              />
        }
        )
      }
     
     

    </div>
  );
  }
}


  


