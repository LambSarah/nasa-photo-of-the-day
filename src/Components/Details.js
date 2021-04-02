import React from 'react'
import ReactPlayer from 'react-player'

export const Details = props => {
  const { title, description, mediaType, url } = props

  const media =
    { mediaType } === 'image' ? (
      <img className='media' src={url} alt={title} />
    ) : (
         <ReactPlayer className='media' url={url} />
    )
    const pStyles ={
      margin:'50px',
      fontSize:'1.5rem',
      textAlign: 'center',
      fontFamily: 'Megrim'
    }
    const titleStyle = {
      margin:'20px',
      fontSize:'2rem',
      textAlign:'center',
      fontFamily: 'Megrim'
    }

    const videoStyle={
      margin:'20px',
      align:'center',
      width:'80%'
    }

  return (
    <div style={titleStyle}className='details'>
      <h3 style={titleStyle}>{title}</h3>
      <p style={pStyles}>{description}</p>
      <div className='media-wrapper videoStyle'></div>
      <div style={videoStyle} className={mediaType === 'image' ? 'image' : 'video'}>{media}</div>
    </div>
  )
}
