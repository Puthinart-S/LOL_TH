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
const NewsInfo3 = lazy(() => import('./Components/News/InfoNews/NewsInfo3'));
const NewsInfo4 = lazy(() => import('./Components/News/InfoNews/NewsInfo4'));
const NewsInfo5 = lazy(() => import('./Components/News/InfoNews/NewsInfo5'));
const NewsInfo6 = lazy(() => import('./Components/News/InfoNews/NewsInfo6'));
const NewsInfo7 = lazy(() => import('./Components/News/InfoNews/NewsInfo7'));
const NewsInfo8 = lazy(() => import('./Components/News/InfoNews/NewsInfo8'));
const NewsInfo9 = lazy(() => import('./Components/News/InfoNews/NewsInfo9'));

const ChampionsInfo = lazy(() => import('./Components/Champions/InfoChampions/ChampionsInfo'));
const ChampionsInfo2 = lazy(() => import('./Components/Champions/InfoChampions/ChampionsInfo2'));
const ChampionsInfo3 = lazy(() => import('./Components/Champions/InfoChampions/ChampionsInfo3'));
const ChampionsInfo4 = lazy(() => import('./Components/Champions/InfoChampions/ChampionsInfo4'));
const ChampionsInfo5 = lazy(() => import('./Components/Champions/InfoChampions/ChampionsInfo5'));

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
          <Route path="/news/infonews3" element={<NewsInfo3 />} />
          <Route path="/news/infonews4" element={<NewsInfo4 />} />
          <Route path="/news/infonews5" element={<NewsInfo5 />} />
          <Route path="/news/infonews6" element={<NewsInfo6 />} />
          <Route path="/news/infonews7" element={<NewsInfo7 />} />
          <Route path="/news/infonews8" element={<NewsInfo8 />} />
          <Route path="/news/infonews9" element={<NewsInfo9 />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/champions/jhin" element={<ChampionsInfo />} />
          <Route path="/champions/katarina" element={<ChampionsInfo2 />} />
          <Route path="/champions/vayne" element={<ChampionsInfo3 />} />
          <Route path="/champions/yasuo" element={<ChampionsInfo4 />} />
          <Route path="/champions/zed" element={<ChampionsInfo5 />} />
          <Route path="/items" element={<Items />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
