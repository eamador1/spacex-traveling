import { useState } from 'react';
import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import RocketsPage from './pages/rockets';
import './App.css';

function App() {
  const [isRocketsActive, setIsRocketsActive] = useState(false);

  const handleRocketsClick = () => {
    setIsRocketsActive(false);
  };
  return (
    <BrowserRouter>
      <header>
        <NavLink
          to=""
          activeClassName="active-link"
          className={`ROCKETS ${isRocketsActive ? 'active-link' : ''}`}
          onClick={handleRocketsClick}
        >
          Rockets
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<RocketsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
