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
    </div>
  )
}
export default App
