import React from 'react'
import './listPage.scss'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import {listData} from '../../lib/dummydata'
import Map from '../../components/map/Map'
function ListPage() {
  const data = listData 
  return (
    <div className='listPage'>
      <div className="theTextPart_listPage">
        <div className="wrapper">
          <Filter/>

          {
            data.map(item => (
                <Card item={item}/>
            ))
          }
        
        </div>
      </div>
      <div className="theMapPart_listPage">

     <Map className='map' items={data}/>
      </div>
    </div>
  )
}

export default ListPage