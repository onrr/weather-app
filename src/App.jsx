import { useSelector } from 'react-redux'
import './App.css'
import Result from './components/Result'
import Search from './components/Search'

function App() {

  const { data } = useSelector((state) => state.weather)

  return (
    <div className='bg-[#1A202C] h-full lg:h-screen w-full p-5'>
    <div className='container mx-auto lg:px-4'>
        <Search  />
        { data && <Result />}
    </div>
    </div>

  )
}

export default App
