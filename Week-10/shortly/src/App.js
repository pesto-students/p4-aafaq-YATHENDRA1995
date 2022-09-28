import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import ContactUs from "./components/contactus/ContactUs";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from "./components/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
