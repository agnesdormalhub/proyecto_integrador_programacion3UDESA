import {Component} from "react"

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
        <div className="Tarjeta" style={{borderColor: this.state.color}}
        onMouseEnter={this.cambiarColor.bind (this,"red")}
        onMouseLeave= {this.cambiarColor.bind (this,'black')}
        onClick = {this.props.onDelete.bind (this,this.props.id)}
        >
       <div> {this.props.id} </div>
       <div>{this.props.lastname},-{this.props.name} </div> 
        </div>
    )
    }
}
