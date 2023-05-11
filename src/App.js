import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import ReservationsPage from './pages/ReservationsPage';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </div>
  );
}

export default App;
