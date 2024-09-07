import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, search } from '../redux/weatherSlice'


function Search() {

    const res = useSelector((state) => state.weather)
    const dispatch = useDispatch()
  
    useEffect(() => {
     if (res.standing == "idle") dispatch(getData(res.city))
    }, [res.city, res.standing])

    return (
        <input type='text'
            placeholder='Just write the name of city.'
            className='mt-8 mb-4 focus:opacity-85 opacity-65 block mx-auto px-2 py-6 w-1/2 h-12 bg-transparent text-2xl font-semibold text-gray-300 outline-none border-b-2 border-gray-300 '
            value={res.city}
            onChange={e => dispatch(search(e.target.value))}
        />
    )
}

export default Search