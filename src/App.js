import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = lazy(() => import('./Components/Navbar/Navbars'));
const Home = lazy(() => import('./Components/Home/Home'));
const News = lazy(() => import('./Components/News/News'));
const Champions = lazy(() => import('./Components/Champions/Champions'));
const Items = lazy(() => import('./Components/Items/Items'));
const Tutorial = lazy(() => import('./Components/Tutorial/Tutorial'));
const Download = lazy(() => import('./Components/Download/Download'));

const NewsInfo = lazy(() => import('./Components/News/InfoNews/NewsInfo'));
const NewsInfo2 = lazy(() => import('./Components/News/InfoNews/NewsInfo2'));

const ChampionsInfo = lazy(() => import('./Components/Champions/InfoChampions/ChampionsInfo'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/infonews1" element={<NewsInfo />} />
          <Route path="/news/infonews2" element={<NewsInfo2 />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/champions/jhin" element={<ChampionsInfo />} />
          <Route path="/items" element={<Items />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
