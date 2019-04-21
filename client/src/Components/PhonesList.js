import React, { Component } from 'react'
import PhoneService from '../Services/PhoneService'
import PhoneCard from './PhoneCard'

class PhonesList extends Component{
    
    constructor(props) {
        super(props)

        this.state = { 
            phones: [],
            requestOngoing: true
        }

        this.service = new PhoneService()
    }

    getAllPhones = () => {
        return this.service.getAllPhones()
            .then(res => {
                this.setState({
                    phones: res.data,
                    requestOngoing: false
                })
            })
    }

    componentDidMount() {
        this.getAllPhones()
    }

render(){
    if (this.state.requestOngoing) {
        return (
            <div className="spinner"></div> 
        )
    }
    else{
        return (
            <div className="phone-list">
                    {
                        this.state.phones.map(phone => <PhoneCard key={phone.id} {...phone}/>)
                    }
            </div>
            )
        }
    }
}

export default PhonesList