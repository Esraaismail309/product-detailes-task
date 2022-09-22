import React from 'react'
import './search.css'


export const SearchInput = (props) => {
  return (
    <div className='d-flex align-items-center'>
      <img src={props.placeholder} alt="search" />
        <input type="text" placeholder='Search by product name or seller' />
    </div>
  )
}
