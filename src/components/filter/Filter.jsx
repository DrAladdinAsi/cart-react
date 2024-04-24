import React from 'react'
import './filter.scss'

function Filter() {
  return (
    <div className='filter'>

     <h1 className="filterTitle">Search Results for <b>London</b></h1>

      <div className="topOfFilter">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type='text' name='city' id='city' placeholder='the city'/>
        </div>
      </div>
      <div className="bottomOfFilter">

      <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="prop">Property</label>
          <select name="prop" id="prop">
            <option value="">any</option>
            <option value="appartment">Appartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="min_price">Min price</label>
          <input type='number' name='min_price' id='min_price' placeholder='any'/>
        </div>

        <div className="item">
          <label htmlFor="max_price">Max price</label>
          <input type='number' name='max_price' id='max_price' placeholder='any'/>
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type='text' name='bedroom' id='bedroom' placeholder='any'/>
        </div>

        <button>
          <img src="/images/search.png" alt="the search image for the filter" />
        </button>
      </div>
    </div>
  )
}

export default Filter