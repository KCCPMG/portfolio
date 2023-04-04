import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BGCanvas from './components/BGCanvas';
import Cover from './components/Cover';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BGCanvas />
      <Cover />
    </div>
  )
}

export default App;

