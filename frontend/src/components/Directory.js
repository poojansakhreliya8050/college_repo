import React from 'react'
import FoodCard from './FoodCard'
import Restaurant from './Restaurant'

const Directory = () => {
    return (
        <>
        <div className='w-[98.70vw] h-4/5 relative flex flex-col content-center justify-center' >
            <img alt='pic' src='https://i.ibb.co/2hdPfQf/1.png' className='blur-[3px] w-screen absolute h-full' />
            <div className='w-full absolute '>
                <p className='text-4xl md:text-6xl lg:text-8xl text-white transition-all duration-300 align-middle text-center'>Zometo</p>
                <p className='text-2xl md:text-3xl lg:text-5xl text-white transition-all duration-300 align-middle text-center'>Discover the best food & drinks in Surat</p>

            </div>
        </div>
        <div className='containerr'>
          <div className='row'>
            <div className='column'><Restaurant /></div>
            <div className='column'><Restaurant /></div>
            <div className='column'><Restaurant /></div>
            <div className='column'><Restaurant /></div>
          </div>
        </div>

        <div className='containerr'>
          <div className='row'>
            <div className='column'><FoodCard /></div>
            <div className='column'><FoodCard /></div>
            <div className='column'><FoodCard /></div>
            <div className='column'><FoodCard /></div>
          </div>

        </div>
        </>

    )
}

export default Directory