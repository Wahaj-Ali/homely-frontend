import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AddHouse from './components/add hosue/addHouse';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);
import Reservations from './components/Reservations/Reservations';
import Booking from './components/booking/Booking';
import DeleteHouse from './components/DeleteHouse/DeleteHouse';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add_house" element={<AddHouse />} />
            <Route element={<SidebarLayout />}>
              <Route path="/" element={<Houses />} />
              <Route path="/:id" element={<HousesDetails />} />
            </Route>
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
