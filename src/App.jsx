import './App.css'
import Result from './components/Result'
import Search from './components/Search'

function App() {

  return (
    <div className='bg-[#1A202C] h-screen w-full p-5'>
    <div className='container mx-auto px-4'>
        <Search  />
        <Result />
    </div>
    </div>

  )
}

export default App
