import './App.css';
import {InsertUser} from './components/register';
import LoginPage from './components/Login';
import { Link, Route,Routes } from 'react-router-dom';
import FarmerModulePage from './components/farmerComponents/farmers_home';
import Admin from './components/adminComponents/admin';
import Home from './components/Home';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <div className="App-header">
      <header className="text-white text-center py-3">
        <h1 className='text-success'>E-Farming Market</h1>
      </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<InsertUser/>}/>
          <Route path="/admin_home" element={<Admin/>}/>
          <Route path="/farmer_home" element={<Admin/>}/>
        </Routes>
    </div>
  );
}

export default App;
