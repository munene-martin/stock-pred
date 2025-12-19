import React from 'react'
import Button from './Button'

const Home = () => {
  return (
   <>
   <div className='container'>
    <div className='p-5 text-center text-white bg-light-dark rounded'>
        <h1>Stock Prediction Portal</h1>
        <p className='text-white'>Welcome to this site. Get all the stock exchange analysis from our technology.</p>
        <Button text="Login" class="btn-info"/>
    </div>
    </div>
    </>
  )
}

export default Home