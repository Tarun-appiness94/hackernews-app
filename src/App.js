import React from 'react'
import "./App.css"
import Header from './components/Header/Header';
import TopStory from './components/Top-story/TopStory';
import LatestStory from './components/Latest-story/LatestStory';
import BestStory from './components/Best-story/BestStory';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Navigate to="/top"/>}/>
          <Route path="/top"  exact element={<TopStory />} />
          <Route path="/new" exact element={<LatestStory />} />
          <Route path="/best" exact element={<BestStory />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;