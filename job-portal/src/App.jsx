import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/SearchDiv/Search'
import Job from './Components/JobDiv/Job'
import Footer from './Components/FooterDiv/Footer'
import Value from './Components/ValueDiv/Value'

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Footer/>
      <Value/>
      
      
     
    </div>
  )
}

export default App