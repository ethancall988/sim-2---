import React, { Component } from 'react'
import Axios from 'axios'

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    Navigate(){
        this.props.history.push("/")
    }

    createHouse(){
        Axios.post('/houses', this.state)
        .then((res) => {
            this.Navigate()
        })
    }

    render(){
        return(
            <div>  
                <div>Wizard</div>
                <input onChange={this.handleChange} placeholder='Name' value={this.state.name} name='name'/>
                <input onChange={this.handleChange} placeholder='Address' value={this.state.address} name='address'/>
                <input onChange={this.handleChange} placeholder='City' value={this.state.city} name='city'/>
                <input onChange={this.handleChange} placeholder='State' value={this.state.state} name='state'/>
                <input onChange={this.handleChange} placeholder='Zipcode' value={this.state.zipcode} name='zipcode' type='number'/>
                <button onClick={() => this.Navigate()}>Cancel</button>
                <button onClick={() => this.createHouse()}>Add House</button>
            </div>
        )
    }
}