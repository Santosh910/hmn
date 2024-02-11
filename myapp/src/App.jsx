
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Men from './components/Men/Men';
import SignIn from './components/SignIn/SignIn';
import ShopNow from './components/Shop Now/ShopNow';
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/header' element={<Header/>} />
      <Route exact path='/footer' element={<Footer/>} />
      <Route exact path='/men' element={<Men/>} />
      <Route exact path='/signin' element={<SignIn/>} />
      <Route exact path='/shopNow' element={<ShopNow/>} />
      <Route exact path='/productPage' element={<ProductPage/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/register' element={<Register/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
