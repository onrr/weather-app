import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'


function Result() {

    const { data } = useSelector((state) => state.weather)

    return (
        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:mt-4 lg:px-6'>
            <div className='w-full lg:w-1/2 flex flex-col mx-6 mt-4 mb-2'>
                <div className='flex items-center'>
                    <img src={`https://flagsapi.com/${data?.city?.country}/flat/48.png`} />
                    <span className='mx-2 text-gray-300 text-3xl font-bold'>{data?.city?.name}, {data?.city?.country}</span>
                </div>
                <div className='mt-8 mb-4 text-gray-300 text-xl min-[480px]:text-lg font-bold flex flex-col min-[480px]:flex-row min-[480px]:justify-between items-center'>
                    <span className='text-gray-300 text-2xl font-bold'>Today Forecast</span>
                    <span>{data?.list?.at(0)?.dt_txt}</span>
                </div>
                <div className='flex flex-col justify-center items-center w-[140px] mx-auto my-2'>
                    <img src={`../../public/${data?.list?.at(0)?.weather[0]?.main}.svg`} className='w-full' />
                    <span className='text-lg font-bold text-gray-300'>Temp: {data?.list?.at(0)?.main?.temp} °C</span>
                </div>
                <div className='grid grid-cols-2 place-content-center gap-4 text-center text-gray-300 text-lg font-bold mt-4'>
                    <div className='bg-[#202736] p-2 rounded-lg'>Humudity: {data?.list?.at(0)?.main?.humidity}%</div>
                    <div className='bg-[#202736] p-2 rounded-lg'>Feels Like: {data?.list?.at(0)?.main?.feels_like}</div>
                    <div className='bg-[#202736] p-2 rounded-lg'>Min Temp: {data?.list?.at(0)?.main?.temp_min}</div>
                    <div className='bg-[#202736] p-2 rounded-lg'>Max Temp: {data?.list?.at(0)?.main?.temp_max}</div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 mx-2 mt-8 grid grid-cols-2 min-[480px]:grid-cols-3 gap-x-4 gap-y-6 text-gray-300 font-bold text-base'>
                <div className='bg-[#202736] flex flex-col items-center rounded-lg px-2 py-6'>
                    <span> {moment(data?.list?.at(0)?.dt_txt).format('dddd')}</span>
                    <img className='w-24' src={`../../public/${data?.list?.at(0)?.weather[0]?.main}.svg`} alt={data?.list?.at(0)?.weather[0]?.main} />
                    <span>{data?.list?.at(0)?.main?.temp} °C</span>
                    <span className='italic font-semibold text-sm my-1'>{data?.list?.at(0)?.main?.temp_min}°C / {data?.list?.at(0)?.main?.temp_max}°C</span>
                </div>
                <div className='bg-[#202736] flex flex-col items-center rounded-lg px-2 py-6'>
                    <span> {moment(data?.list?.at(8)?.dt_txt).format('dddd')}</span>
                    <img className='w-24' src={`../../public/${data?.list?.at(8)?.weather[0]?.main}.svg`} alt={data?.list?.at(8)?.weather[0]?.main} />
                    <span>{data?.list?.at(8)?.main?.temp} °C</span>
                    <span className='italic font-semibold text-sm my-1'>{data?.list?.at(8)?.main?.temp_min}°C / {data?.list?.at(8)?.main?.temp_max}°C</span>
                </div>
                <div className='bg-[#202736] flex flex-col items-center rounded-lg px-2 py-6'>
                    <span> {moment(data?.list?.at(16)?.dt_txt).format('dddd')}</span>
                    <img className='w-24' src={`../../public/${data?.list?.at(16)?.weather[0]?.main}.svg`} alt={data?.list?.at(16)?.weather[0]?.main} />
                    <span>{data?.list?.at(16)?.main?.temp} °C</span>
                    <span className='italic font-semibold text-sm my-1'>{data?.list?.at(16)?.main?.temp_min}°C / {data?.list?.at(16)?.main?.temp_max}°C</span>
                </div>
                <div className='bg-[#202736] flex flex-col items-center rounded-lg px-2 py-6'>
                    <span> {moment(data?.list?.at(24)?.dt_txt).format('dddd')}</span>
                    <img className='w-24' src={`../../public/${data?.list?.at(24)?.weather[0]?.main}.svg`} alt={data?.list?.at(24)?.weather[0]?.main} />
                    <span>{data?.list?.at(24)?.main?.temp} °C</span>
                    <span className='italic font-semibold text-sm my-1'>{data?.list?.at(24)?.main?.temp_min}°C / {data?.list?.at(24)?.main?.temp_max}°C</span>
                </div>
                <div className='bg-[#202736] flex flex-col items-center rounded-lg px-2 py-6'>
                    <span> {moment(data?.list?.at(32)?.dt_txt).format('dddd')}</span>
                    <img className='w-24' src={`../../public/${data?.list?.at(32)?.weather[0]?.main}.svg`} alt={data?.list?.at(32)?.weather[0]?.main} />
                    <span>{data?.list?.at(32)?.main?.temp} °C</span>
                    <span className='italic font-semibold text-sm my-1'>{data?.list?.at(32)?.main?.temp_min}°C / {data?.list?.at(32)?.main?.temp_max}°C</span>
                </div>
                <div className='bg-[#202736] flex flex-col items-center rounded-lg px-2 py-6'>
                    <span> {moment(data?.list?.at(39)?.dt_txt).format('dddd')}</span>
                    <img className='w-24' src={`../../public/${data?.list?.at(39)?.weather[0]?.main}.svg`} alt={data?.list?.at(39)?.weather[0]?.main} />
                    <span>{data?.list?.at(39)?.main?.temp} °C</span>
                    <span className='italic font-semibold text-sm my-1'>{data?.list?.at(39)?.main?.temp_min}°C / {data?.list?.at(39)?.main?.temp_max}°C</span>
                </div>
            </div>
        </div>
    )
}

export default Result