import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelPage, VideoPage, SearchFeed, Navbar, Feed, Sidebar } from './components';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F8F8F8', height: '100vh', width: '100%' }}>
        <Navbar />
        
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoPage />} />
          <Route path='/channel/:id' element={<ChannelPage />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
