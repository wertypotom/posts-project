import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostItem from './components/PostItem/PostItem';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ScrollToTop } from './components/Scroll/Scroll';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Posts from './pages/Posts/Posts';
import Registration from './pages/Registration/Registration';
import Navbar from './UI/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Registration />} />

          <Route path='posts'>
            <Route
              index
              element={
                <PrivateRoute>
                  <Posts />
                </PrivateRoute>
              }
            />
            <Route
              path=':id'
              element={
                <PrivateRoute>
                  <PostItem />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path='about' element={<About />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
