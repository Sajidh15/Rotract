import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Page';
import HomeExtention from './Page/HomeExtention';
import Board from './Page/Board';
import Project from './Page/Project';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <HomeExtention />
          </>
        } />
        <Route path='/board' element={<Board />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
