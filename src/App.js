import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';
import Error from './Error';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/movies/:id' element={<Movie />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
