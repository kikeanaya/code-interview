import React, { Component } from 'react'

class PhoneDetails extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            phone: props.phone
        }        
    }

    render() {
        return (
            <div className="phone-details">
                <div className="image-container-details">
                    <img src={require(`../Images/${this.state.phone.imageFileName}`)} className="image-in-details" alt={this.state.phone.name}/>
                </div>
                <div className="info-container">
                    <p className="phone-name-details">{this.state.phone.manufacturer} {this.state.phone.name}</p>
                    <p>{this.state.phone.description}</p>
                    <p>Price: {this.state.phone.price} € <span>VAT incl.</span></p>

                    <div className="sub-container">
                        <div className="color-container">
                            <p>Color:</p>
                            <div className="color-circle" style={{background: this.state.phone.color}}></div>                    </div>
                        <div className="specs-container">
                            <p>Tech Specs:</p>
                            <p>Screen: {this.state.phone.screen}</p>
                            <p>Processor: {this.state.phone.processor}</p>
                            <p>RAM: {this.state.phone.ram} GB</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
  }

  export default PhoneDetails