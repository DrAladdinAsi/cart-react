import React from 'react'
import {userData} from '../../lib/dummydata'
import {singlePostData} from '../../lib/dummydata'
import './singlePage.scss'
import Slider from '../../components/slider/Slider'
import Map from '../../components/map/Map'

function SinglePage() {
  const data = userData
  const item = singlePostData
  return (
    <div className='singlePage'>
        <div className="article">
          <div className="wrapper">
            <Slider images= {item.images}/>

            <div className="info">
              <div className="post">
                <span className="title_post">{item.title}</span>
                <div className="location_post">
                  <img src="/images/pin.png" alt="the pin for the location" />
                 <span className="thePlace_post">{item.address}</span>
                </div>
                <span className='price_singlePage'>${item.price}</span>
              </div>
              <div className="user">
                <img src={data.img} alt="the image for the user" />
                <span>{data.name}</span>
              </div>
            </div>

            <div className="desc">
              <p className='para_singlePage'>{item.description}</p>
            </div>
        
          </div>
        </div>
        <div className="features_singlePage">
        <div className="wrapper">

          <div className="gernerals">
            <p className="title">Generals</p>
            <div className="listVerticale">
              <div className="listItem">
                <img src="/images/utility.png" alt="the image for the list item" />
                <div className="text">
                  <span className='item_name'>Utilities</span>
                <span className='item_desc'>Renter is responsable</span>
                </div>
               
              </div>

              <div className="listItem">
                <img src="/images/pet.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Pet policy</span>
                <span className='item_desc'>Pets Allowed</span>
                </div>
              </div>

              
              <div className="listItem">
                <img src="/images/fee.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Property Fees</span>
                <span className='item_desc'>Must have the 3X the rent in total household income</span>
                </div>
              </div>
            </div>
          </div>

     
    <div className="sizes">
    <p className="title">Sizes</p>
    <div className="sizeItems">
      <div className="size_item">
          <img src="/images/size.png" alt="the image for the size item" />
          <span>80 sqft</span>
      </div>
      <div className="size_item">
          <img src="/images/bed.png" alt="the image for the size item" />
          <span>2 beds</span>
      </div>
     <div className="size_item">
        <img src="/images/bath.png" alt="the image for the size item" />
       <span>1 bathroom</span>
     </div>
     </div>
    </div>


          <div className="Nearby_places">
            <p className="title">Nearby Places</p>
            <div className="listHersiontal">
              <div className="listItem">
                <img src="/images/school.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>School</span>
                <span className='item_desc'>250m Away</span>
                  </div>
              </div>

              <div className="listItem">
                <img src="/images/bus.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Bus Stop</span>
                <span className='item_desc'>100m Away</span>
                </div>
              </div>

              
              <div className="listItem">
                <img src="/images/restaurant.png" alt="the image for the list item" />
                <div className="text">
                <span className='item_name'>Restaurant</span>
                <span className='item_desc'>200m Away</span>
                  </div>
              </div>
            </div>
          </div>

          <div className="location">
            <Map className='map'  items={[singlePostData]}/>
           
          </div>

          <div className="buttons">
            <div className="button_sp">
              <img src="/images/chat.png" alt="the chat image for the buttons" />
              <span>Send a message</span>
            </div>
            <div className="button_sp">
            <img src="/images/save.png" alt="the chat image for the buttons" />
              <span>Save the place</span>
            </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default SinglePage