import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AnimeDetails from './components/AnimeDetails/AnimeDetails';
import Animes from './components/Animes/Animes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Animes />}/>
          <Route path="/animeDetails/:animeId" element={<AnimeDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
