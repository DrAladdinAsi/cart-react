import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({item}) {
    const position = [item.latitude,item.longitude]
  return (
    <Marker position={position} >
      <Popup>
        <div className="pin_container">
            <img src={item.img} alt="the image for the pin" className="img_in_pinContainer" />
            <div className="textContainer_in_pinContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span>{item.bedroom} bedroom</span>
              <span>${item.price}</span>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin