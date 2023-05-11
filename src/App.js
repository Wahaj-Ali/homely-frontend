import {
  BrowserRouter as Router, Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import HousesDetails from './components/houses details/HouseDetails';
import Houses from './components/houses/Houses';
import Login from './components/auth/Login';

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Houses />} />
            <Route path="/:id" element={<HousesDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
