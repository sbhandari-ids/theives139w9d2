import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1> Hello from App</h1> */}
        <LikeButton />
       </div>
    </>
  )
}

export default App
