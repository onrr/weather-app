import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading'
import './App.css'
import Result from './components/Result'
import Search from './components/Search'

function App() {

  const { data, standing } = useSelector((state) => state.weather)

  return (
    <div className='p-5'>
    <div className='container mx-auto lg:px-4'>
        <Search  />
        { data && standing === "fulfilled" ? <Result />
        : <ReactLoading type="spokes" color="#D1D5DB"
        height={200} width={100} className='flex justify-center items-center mx-auto' />
        }
    </div>
    </div>

  )
}

export default App
