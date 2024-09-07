import React from 'react'
import { useSelector } from 'react-redux'


function Result() {

    const { data, city } = useSelector((state) => state.weather)
    console.log(data)

    return (
        <div className='flex justify-between items-center my-12 px-6'>
            <div className='w-1/2 mx-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center mx-4'>
                        <img id='flag' src={`https://flagsapi.com/${data?.sys?.country}/flat/48.png`} />
                        <span className='mx-4 text-gray-300 text-3xl font-bold'>{data?.name}, {data?.sys?.country}</span>
                    </div>
                    <div>
                        <span className='mx-4 text-gray-300 text-2xl font-bold'>Today Forecast</span>
                    </div>
                </div>
            </div>
            <div className='w-1/2 mx-2'></div>
        </div>
    )
}

export default Result