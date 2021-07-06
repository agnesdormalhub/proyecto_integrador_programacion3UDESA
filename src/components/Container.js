import React, {Component} from 'react';
import Child from './Child';


class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            original: [],
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=20")
        .then(result => result.json())
        .then(data => { 
            this.setState({items: data.results, original: data.results})
        })    
    }   

    borrarTarjeta = (key) => {
        let results = this.state.items.filter((item) =>{
            console.log(key)
            return item.login.uuid !== key;
         })
         this.setState({
            items: results
        })
    }

    reset = () => {
        this.setState({
            items: this.state.original,
        })
    }

    

    agregarTarjetas = () => {
        let valor = document.querySelector(".inputAdd").value 
        fetch ("https://randomuser.me/api/?results=" + valor)
        .then(resultado => resultado.json())
        .then(items => {
            items.results.map((item) => {
            this.state.items.push(item)})
            this.setState({items: this.state.items})
        })
    }

    sortAlphabetically = () => {
        this.state.items.sort((a, b) => a.name.first.localeCompare(b.name.first))
        this.setState({
            items: this.state.items.sort(function(a, b) { return a.name.first > b.name.first})
        })
    }

    sortAlphabeticallyPaTras = () => {
        this.state.items.sort((a, b) => b.name.first.localeCompare(a.name.first))
        this.setState({
            items: this.state.items.sort(function(a, b) { return a.name.first < b.name.first})
        })
    }

    submit = () => {
        if (document.querySelector(".inputName").value !== "") {
            let nombre = document.querySelector(".inputName").value

            let resultado = this.state.items.filter((item) =>{
                return item.name.first.toLowerCase() === nombre.toLowerCase();
            })
            this.setState({
                items: resultado
            })
        } else if (document.querySelector(".inputLastName").value !== "") {
            let apellido = document.querySelector(".inputLastName").value

            let resultado = this.state.items.filter((item) =>{
                return item.name.last.toLowerCase() === apellido.toLowerCase();
            })
            this.setState({
                items: resultado
            })
        } else if (document.querySelector(".inputAge").value !== "") {
            let edad = document.querySelector(".inputAge").value

            let resultado = this.state.items.filter((item) =>{
                return parseInt(item.dob.age) === parseInt(edad);
            })
            this.setState({
                items: resultado
            })
        } else if (document.querySelector(".inputCountry").value !== "") {
            let pais = document.querySelector(".inputCountry").value

            let resultado = this.state.items.filter((item) =>{
                return item.location.country.toLowerCase() === pais.toLowerCase();
            })
            this.setState({
                items: resultado
            })
        }

    }


    render () {
        return(
            <div className="w-full mx-auto justify-between">
                <div class="flex my-4">
                    <div class="mx-2">
                        <div className="flex cursor-pointer" onClick= {this.reset.bind(this)}>
                            Resetear <i class="fas fa-redo mx-2 mt-1"></i>
                        </div>
                    </div>
                    <div class="mx-2">
                        <div className="flex"> 
                                <input class="inputAdd shadow rounded border-0 p-1 mx-1" type="number"></input>
                                <button class="mx-1 text-black font-bold py-2 px-4 border-b-4 border-dark rounded" onClick={this.agregarTarjetas.bind(this)}>Agregar</button>
                        </div> 
                    </div>
                    <div class="mx-2">
                        <div className="flex"> 
                                <input class="inputName shadow rounded border-0 p-1 mx-1" type="text" placeholder="Nombre"></input>
                                <input class="inputLastName shadow rounded border-0 p-1 mx-1" type="text" placeholder="Apellido"></input>
                                <input class="inputAge shadow rounded border-0 p-1 mx-1" type="text" placeholder="Edad"></input>
                                <input class="inputCountry shadow rounded border-0 p-1 mx-1" type="text" placeholder="País"></input>
                                <button class="mx-1 text-black font-bold py-2 px-4 border-b-4 border-dark rounded" onClick={this.submit.bind(this)}>Filtrar</button>
                        </div>
                    </div>
                    <div>
                    <button class="AZ mx-1 text-black font-bold py-2 px-4 border-b-4 border-dark rounded" onClick={this.sortAlphabetically.bind(this)}>A - Z</button>
                    <button class="ZA mx-1 text-black font-bold py-2 px-4 border-b-4 border-dark rounded" onClick={this.sortAlphabeticallyPaTras.bind(this)}>Z - A</button>
                    </div>
                </div>

                <div className="flex flex-wrap w-full"> 
                {this.state.items.map( (item) => {
                        return (
                            <Child 
                                key={item.login.uuid}
                                id={item.login.uuid}
                                name={item.name.first} 
                                lastname={item.name.last}
                                image={item.picture.large} 
                                age={item.dob.age} 
                                email={item.email} 
                                birthdate={item.dob.date} 
                                color="white"
                                onDelete={this.borrarTarjeta.bind(this)}
                                address={item.location} 
                                registered={item.registered.date}
                                phone={item.cell}
                            />

                        )
                    })
                }
                </div>
            </div>
        )}
}

export default Container;
