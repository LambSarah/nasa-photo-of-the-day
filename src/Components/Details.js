import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

export const Details = props => {
  const { title, description, mediaType, url } = props

  const media =
    { mediaType } === 'video' ? (
       <ReactPlayer className='media' url={url} />
    ) : (<img className='media' src={url} alt={title} />
    )
const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`;

    // const pStyles = styled.p`
    //   margin:50px;
    //   font-size:1.5rem;
    //   text-align: center;
    //   font-family: Megrim;
    // `;

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
      <p>{description}</p>
      <WrapperDiv>
         <div style={videoStyle} className={mediaType === 'image' ? 'image' : 'video'}>{media}</div>
      </WrapperDiv>
  </div>
  )
}
