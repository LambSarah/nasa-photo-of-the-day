import React from 'react'

export const Header = props => {
  const { date } = props

  return (
    <div className='header'>
      <h1>NASA</h1>
      <h2>APOD</h2>
      <h2>Photo of the Day</h2>
      <p>{date}</p>
    </div>
  )
}
