import {Component} from "react"
import Moment from 'react-moment'

export default class Child extends Component {
    constructor(){
        super();
        this.state={
            color:"black"
        }

    }
    cambiarColor(nuevoColor){
        this.setState({color:nuevoColor});

    }

    componentDidMount(){
    //   console.log(">>> se ha creado la tarjeta: ("+this.props.id+")"+ this.props.name)
    }

   componentDidUpdate(prevProps,prevStates){
    //     console.log("=== se actualizo la tarjeta("+this.props.id+")");
    //    console.log(prevProps);
    //     console.log(prevStates.color +"->" + this.state.color)
    }

    componentWillUnmount(){
    // console.log("tarjeta a borrar: ("+ this.props.id+")")

    }

    render(){
    return (
        <div class="container">
            <div className="Tarjeta" style={{borderColor: this.state.color}} onMouseEnter={this.cambiarColor.bind (this,"red")} onMouseLeave= {this.cambiarColor.bind (this,'black')}>
                <div> {this.props.lastname}, {this.props.name} </div>
                <div> {this.props.email} </div>
                <div>
                    <img src={this.props.image}></img>
                </div>
                <div> (<Moment format="DD/MM/YYYY">{this.props.birthdate}</Moment> - {this.props.age} years old)</div>
                <div> 
                    <div> Street Address: {this.props.street} {this.props.street_number} </div>
                    <div> {this.props.city} - {this.props.state} </div>
                    <div> ZIP Code: {this.props.postcode} </div>
                    <div> {this.props.country} </div>
                    <div> Phone: {this.props.phone} </div>
                    <div> Registered: <Moment format="DD/MM/YYYY">{this.props.registered}</Moment> </div>
                </div>
                <div>
                    <button class="boton" onClick = {this.props.onDelete.bind (this,this.props.id)}>DELETE</button>
                </div>
            </div>
        </div>
    )
    }
}
