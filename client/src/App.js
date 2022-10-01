import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Sidebar } from './components';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#F8F8F8', height: '100vh', width: '100%' }}>
        <Navbar />
        
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
