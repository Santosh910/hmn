
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Men from './components/Men/Men';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/header' element={<Header/>} />
      <Route exact path='/footer' element={<Footer/>} />
      <Route exact path='/men' element={<Men/>} />
      <Route exact path='/signin' element={<SignIn/>} />
     </Routes>
    </div>
  );
}

export default App;
