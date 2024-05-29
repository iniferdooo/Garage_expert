
import './App.css';
import Navbar from './component/navbar';
import Statuspekerja from './component/Statuspekerja';
import Hero from './component/hero';
import StockTable from './component/tablestok'


function App() {
  return (

    <div className="App">
      <div className='bg-gray-700'>
      <Navbar />
      <Hero />
      {/* <Jam /> */}
      <Statuspekerja />
      <StockTable />
      </div>
    </div>
  );
}

export default App;
