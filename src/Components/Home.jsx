import React from 'react'
import Event from './Event'

const Home = ({ data }) => {
    return (
        <div className='home'>
            {
                data.map((ele, i) => {
                    return <Event key={i} data={ele} />
                })
            }
        </div>
    )
}

export default Home
