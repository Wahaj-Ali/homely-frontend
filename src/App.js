import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import SideBar from './components/sidebar/SideBar';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';
import Reservations from './components/Reservations/Reservations';
import Booking from './components/booking/Booking';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <SideBar />
          <Routes>
            <Route path="/" element={<Houses />} />
            <Route path="/:id" element={<HousesDetails />} />
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/Booking" element={<Booking />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
