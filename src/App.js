<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import './App.css'
import { BASE_URL, API_KEY } from './constants.js'
import axios from 'axios'
import { Header } from './Components/Header.js'
import { Details } from './Components/Details.js'

function App () {
  const [apodData, setApodData] = useState([])
  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        console.log(response.data)
        setApodData(response.data)
      })
      .catch(error => console.log(error, 'Data did not return'))
  }, [])

  const title = apodData.title
  const description = apodData.explanation
  const url = apodData.url
  const mediaType = apodData.mediaType
  const date = apodData.date

  return (
    <div className='App'>
      <Header date={date} />
      <Details
        title={title}
        description={description}
        url={url}
        mediaType={mediaType}
        date={date}
      />
=======
//eslint ignore next line
import React, { useState, useEffect } from 'react'
import './App.css'
import { API_KEY, BASE_URL } from './constants.js'
import axios from 'axios'
import Photo from './Components/Photo/Photo.js'
//import Links from './Components/Links.js'
//import Categories from './Components/Categories.js'
//import Description from './Components/Description.js'
//import SearchBox from './Components/SearchBox.js'

function App () {
  // Create slice of state called data to retreive and store api call data
  const [nasaData, setNasaData] = useState()

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        setNasaData(response.data)
      })
      .catch(error => console.log(error.message))
  }, [])

  console.log(nasaData)
  // const nasaArr = Array.from(nasaData)
  /* let mainImgUrl, imgTitle, description
  nasaData.map((item, index, key) => {
    item.key === 'url'
      ? (mainImgUrl = item)
      : (mainImgUrl = '')(item.key === 'title')
      ? (imgTitle = item)
      : (imgTitle = '')
  })

  // if (nasaData.media_type === 'video') {
  //let mainVideoUrl = nasaData.url
  // } */
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='glow'>Photo of the Day</h1>
        <Photo
        // mainImgUrl={mainImgUrl}
        // imgTitle={imgTitle}
        // description={description}
        />
      </div>
>>>>>>> 4c65cdd76d73e907f4d0eeaaa95c794dcabd89fa
    </div>
  )
}
export default App
