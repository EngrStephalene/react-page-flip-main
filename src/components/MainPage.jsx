import React from 'react'
import Book from './Book'
import backgroundGIF from '../../images/try3.gif'

const MainPage = () => {
  return (
    <div style={{
        height: '100dvh',
        width: '100dvw',
        backgroundImage: {backgroundGIF},
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Book/>
    </div>
  )
}

export default MainPage