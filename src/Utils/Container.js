import React from 'react'

function Container(props) {
  return (
    <div>
       <div className='container'>{props.children}</div>
    </div>
  )
}

export default Container
