import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';
import Reservations from './components/Reservations/Reservations';
import Booking from './components/booking/Booking';
import DeleteHouse from './components/DeleteHouse/DeleteHouse';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Houses />} />
            <Route path="/:id" element={<HousesDetails />} />
            <Route path="my_reservations" element={<Reservations />} />
            <Route path="reserve" element={<Booking />} />
            <Route path="delete_house" element={<DeleteHouse />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
