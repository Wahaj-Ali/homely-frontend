import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';
import Reservations from './components/reservations/Reservations';
import Booking from './components/booking/Booking';
import DeleteHouse from './components/DeleteHouse/DeleteHouse';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route path="/:id" element={<HousesDetails />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="booking" element={<Booking />} />
          <Route path="delete_house" element={<DeleteHouse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
