import React, { Component } from 'react'
import Axios from 'axios'

export default class House extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    
    render(){
        return(
            <div>             
                <div>
                {this.props.prophouse.name}
                </div>
                <div>
                {this.props.prophouse.address}
                </div>
                <div>
                {this.props.prophouse.city}
                </div>
                <div>
                {this.props.prophouse.state}
                </div>
                <div>
                {this.props.prophouse.zipcode}
                </div>
                <button onClick={() => this.props.deleteHouse(this.props.prophouse.id)}>Delete</button>
            </div>
        )
    }
}