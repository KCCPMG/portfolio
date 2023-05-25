import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import BGCanvas from './components/BGCanvas';
import Cover from './components/Cover';
import Content from './components/Content/Content';


function App() {

  return (
    <div className="App">
      {/* <BGCanvas /> */}
      {/* <Cover /> */}
      <Content />
    </div>
  )
}

export default App;

