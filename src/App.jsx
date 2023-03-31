import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BGCanvas from './components/BGCanvas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BGCanvas />
      <h1>Ahoy</h1>
    </div>
  )
}

export default App;

