import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Cat from './components/Cat/Cat'
import Dog from './components/Dog/Dog'
import Fox from './components/Fox/Fox';
import Header from './components/Header/Header'

function App() {
  const theme = useSelector(state=> state.themeIsDark)

  return (
    <div className={`bg-${!theme ? 'light': 'dark'}`} style={{width: '100vw', 'min-height': '100vh'}}>
      <Header />
      <Routes>
       <Route path='/cat' element={<Cat />} />
       <Route path='/dog' element={<Dog />} />
       <Route path='/fox' element={<Fox />} />
      </Routes>
    </div>
  );
}

export default App;
