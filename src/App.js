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
import DeleteHouse from './components/delete house/deleteHouse';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add_house" element={<AddHouse />} />
            <Route path="/delete_house" element={<DeleteHouse />} />
            <Route element={<SidebarLayout />}>
              <Route path="/" element={<Houses />} />
              <Route path="/:id" element={<HousesDetails />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
