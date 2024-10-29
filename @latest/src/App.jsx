import { useState } from 'react'
import Adoptform from './components/AdoptForm'
function App() {


  return (
    <div className='h-screen'>
    <header className='h-[100px] w-full bg-slate-500'>
      <p className='text-3xl text-white text-center'>Header</p>
    </header>
    <div className='h-[calc(100%-160px)] w-full bg-slate-100 overflow-auto'>
       <h1 className="text-3xl font-bold underline text-center">
      This is adopted form
    </h1>
    <Adoptform/>
    </div>
   
    <footer className='h-[60px] w-full bg-slate-500'>

    </footer>

    </div>
  )
}

export default App
