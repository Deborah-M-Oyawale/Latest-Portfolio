import React from 'react'
import About from './About';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
const MainContent = () => {
  return (
    <div className='relative'>
        <main className='bg-grey top-0 py-14 lg:w-1/2 left-45 lg:absolute' >
          <Home/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
        </main>
    </div>
    
  )
}

export default MainContent;