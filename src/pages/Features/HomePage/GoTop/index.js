import React from 'react'
import {   RiArrowUpSLine } from 'react-icons/ri'

function GoTop({gotopActive}) {
  return (
    <div className={gotopActive ? "go-top go-top-active" : "go-top"}>
        <RiArrowUpSLine className='go-top-icon'/>
    </div>
  )
}

export default GoTop