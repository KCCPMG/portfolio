import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import BGCanvas from './components/BGCanvas';
import Cover from './components/Cover';

function App() {

  return (
    <div className="App">
      {/* <BGCanvas /> */}
      <Cover />
    </div>
  )
}

export default App;

