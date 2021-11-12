import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = lazy(() => import('./Components/Navbar/Navbars'));
const Home = lazy(() => import('./Components/Home/Home'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Navbars/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
