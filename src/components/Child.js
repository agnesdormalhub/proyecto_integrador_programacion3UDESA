import React, {Component} from 'react';
import Moment from 'react-moment';

class Child extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorfondo: props.color,
            icon: "plus-circle",
            display: "none"
        }
    }

    hoverTarjeta = (color) => {
        if (this.state.colorfondo !== '#AFB8FB') {
            this.setState({
                colorfondo: color,
            })
        } else {
            this.setState({
                colorfondo: '#AFB8FB'
            })
        }
    }

    detalle = () => {
        if (this.state.display === 'block' ) {
        this.setState({
            display: 'none',
        })
        } else {
        this.setState({
            display: 'block'
        })
    }}

    render() {
        return(
            <div class="flex w-1/4">
                <div class="bg-white shadow-lg rounded-lg overflow-hidden my-4" style={{backgroundColor: this.state.colorfondo}}
                onMouseEnter = { () => this.hoverTarjeta("#e3e3e3")}
                onMouseLeave = { () => this.hoverTarjeta("white")}>
                    <img class="w-full h-56 object-cover object-center" src={this.props.image} alt="avatar"/>
                    <div class="py-4 px-6">
                        <h1 class="text-2xl font-semibold text-gray-800">{this.props.name} {this.props.lastname}</h1>
                        <p class="py-2 text-lg text-gray-700"><Moment format="DD/MM/YYYY">{this.props.birthdate}</Moment> - {this.props.age} years old</p>
                        <div class="flex items-center mt-4 text-gray-700">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                            </svg>
                            <h1 class="px-2 text-sm">{this.props.address.country}</h1>
                        </div>
                        <div class="flex items-center mt-4 text-gray-700">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
                            </svg>
                            <h1 class="px-2 text-sm">{this.props.email}</h1>
                        </div>
                        <ul class="flex justify-center my-4">
                                <i class="fas fa-trash-alt mr-2 cursor-pointer" onClick={this.props.onDelete.bind(this, this.props.id)}></i>
                                <i class="fas fa-plus ml-2 cursor-pointer" onClick = { () => this.detalle("block")}></i>
                            </ul>
                        <div style={{display: this.state.display}} icon={{icon: this.state.icon}}> 
                            <ul>
                                <li>{this.props.address.street.name} {this.props.address.street.number}</li>
                                <li>{this.props.address.state}/{this.props.address.country}</li>
                                <li>{this.props.phone}</li>
                                <li>Member since: <Moment format="DD/MM/YYYY">{this.props.registered}</Moment></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Child;
