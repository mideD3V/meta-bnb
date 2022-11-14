import React from 'react' 
import NavBar from './components/navbar/Navbar'
import Main from './components/main/main'

export default function App() {
  
  return (
    <>
      <NavBar />
      <Main />
      
      <p className='text-red-200'>Hey World!</p>
      <h1 className="text-2xl text-green-500 bg-yellow-200 font-bold underline ">
        Hello world!
      </h1>
    </>
  );
  
}
