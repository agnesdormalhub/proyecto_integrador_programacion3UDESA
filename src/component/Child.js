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
       // console.log(">>> se ha creado la tarjeta: ("+this.props.id+")"+ this.props.name)
    }

   componentDidUpdate(prevProps,prevState){
      //  console.log()
      //  console.log()
       // console.log()
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
        {this.props.id} - {this.props.name}
        </div>
    )
    }
}
