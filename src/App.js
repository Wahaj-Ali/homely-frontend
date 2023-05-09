import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import ReservationsPage from './pages/ReservationsPage';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';
// import Reservations from './components/reservations/Reservations';
import Booking from './components/booking/Booking';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ReservationsPage />
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route path="/:id" element={<HousesDetails />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
