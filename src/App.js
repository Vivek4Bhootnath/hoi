import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sticky from './Components/Sticky';
import Show from './Components/Show';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
// import Product from './Components/Product';
import Contact from './Components/Contact';
import Details from './Components/Details';
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
// import ImageGallery from './Components/Gallery2';
// import ImageGallery from './Components/Gallery';



function App() {
  return (
    <div className="App">
      
      <Header/>
      <Sticky/>
{/* <ImageGallery 
      images={['https://picsum.photos/id/1018/1000/600/', 'https://picsum.photos/id/1015/1000/600/', 'https://picsum.photos/id/1019/1000/600/']} />  */}


      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Show" element={ <Show/>} />
        <Route path="/Contact" element={ <Contact/>} />
        <Route path="/Cart" element={ <Cart/>} />
        <Route path="/Checkout" element={ <Checkout/>} />
        <Route path="/Payment" element={ <Payment/>} />
     
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
     
      <Footer/>
      <ToastContainer autoClose={1500} />

         {/* <Route path="/cart/:id" element={<Product />} /> */}  
    </div>


  );
}

export default App;
