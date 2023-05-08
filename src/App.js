import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route path="/:id" element={<HousesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
