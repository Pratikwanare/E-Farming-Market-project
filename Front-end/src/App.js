import './App.css';
import {InsertUser} from './components/register';
import LoginPage from './components/Login';
import {Route,Routes} from 'react-router-dom';
import Admin from './components/adminComponents/admin';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProduct from './components/farmerComponents/ProductForm';
import FarmerModule from './components/farmerComponents/FarmerPage';
import WholesellerModule from './components/wholsalerComponents/WholesellerM';
import ShowProducts from './components/wholsalerComponents/showProducts';
import Farmerview from './components/adminComponents/Farmer';
import Wholesalers from './components/adminComponents/Wholesaler';
import WholesalerProfileForm from './components/wholsalerComponents/Profile';
import FarmerProfileForm from './components/farmerComponents/Profile';
import User from './components/adminComponents/User';

function App() {
  return (
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<InsertUser/>}/>
            <Route path="/admin_home" element={<Admin/>}/>
            <Route path="/farmer_home" element={<FarmerModule/>}/>
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/wholesaler_home" element={<WholesellerModule/>}/>
            <Route path="/showproducts" element={<ShowProducts/>}/>
            <Route path="/listfarmers" element={<Farmerview/>}/>
            <Route path="/listwholesalers" element={<Wholesalers/>}/>
            <Route path="/wholesalerprofile" element={<WholesalerProfileForm/>}/>
            <Route path="/farmerprofile" element={<FarmerProfileForm/>}/>
            <Route path="/User" element={<User/>}/>
          </Routes>
          <Footer/>
        </div>
  );
}

export default App;
