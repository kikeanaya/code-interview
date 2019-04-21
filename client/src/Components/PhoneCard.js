import React from 'react'
import { Link } from 'react-router-dom'

const PhoneCard = phone => {

    return (
        <div className="phone-card">
            <Link to={{pathname: `/${phone.id}`, state: {phone} }}>
                <div className="image-container">
                    <img className="phone-image" src={require(`../Images/${phone.imageFileName}`)} alt={phone.name}/>
                </div>
                <p className="phone-name">{phone.manufacturer} {phone.name}</p>
                <p>{phone.price} € <span>VAT incl.</span></p>
            </Link>
        </div>
    )
}

export default PhoneCard