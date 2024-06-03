
import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Statuspekerja from './component/Statuspekerja';
import Hero from './component/hero';
import StockTable from './component/tablestok'
import About from './component/About';
import ContactUs from './component/ContactUs';
import Footer from './component/footer';


function App() {
  return (

    <div className="App">
      <div className='bg-gray-700'>
      <Navbar />
      <Hero />
      <div className="App">
<header className="App-header">
 <div>
  <h1 className="text-4xl font-bold text-center my-8" id='about'>Selamat Datang digarage Expert</h1>
  <About />
  </div>
</header>
</div>
      <Statuspekerja />
      <StockTable />
      <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
        <ContactUs />
      </header>

    </div>
    <Footer />
      </div>
    </div>
  ); 
}

export default App;
