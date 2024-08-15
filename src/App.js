import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';

import Navigation from './customer/components/navigation/Navigation.jsx';
import Product from './customer/components/Products/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Order from './customer/components/Order/Order.jsx';
import Orderdetails from './customer/components/Order/Orderdetails.jsx';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes.jsx';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      <div>
        
        <div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
