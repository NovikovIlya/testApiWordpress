import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    const  fetchData = async ()=>{
      const data = await fetch('https://zesty-field.localsite.io/wp-json/wc/v3/products/239',{
        headers:
      })
    }
  },[])

  return (
    <>
      
    </>
  )
}

export default App
