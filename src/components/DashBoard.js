import React, { Component } from 'react'
import House from './House'
import axios from 'axios'

export default class DashBoard extends Component{
    constructor(){
        super()
        this.deleteHouse = this.deleteHouse.bind(this)
        this.state = {
            houses: [],
            isLoading: true
            
        }
    }


    Navigate(){
        this.props.history.push("/Wizard")

    }
    componentDidMount(){
    this.getHouses()
    }
    getHouses(){
        axios.get('/houses')
        .then((res) => {
            this.setState({
                houses: res.data,
                isLoading: false
            })
        })
    }
    deleteHouse = (id) => {
        this.setState({
            isLoading: true
        })
        axios
        .delete('/houses/'+ id)
        .then(res => {
            this.getHouses()
        })
    }

    render(){
        if(this.state.isLoading){
            return (
                <div>Loading...</div>
            )
        }else{
                return(
                    <div>
        
                        
                        {this.state.houses.map((house, index) => (<House prophouse={house} deleteHouse={this.deleteHouse}/>))}
                       
                        <button onClick={() => this.Navigate()}>Add New Property</button>
        
                    </div>
                )

        }

    }
}

