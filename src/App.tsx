import './App.css';
import Cards from './components/Cards';
import YourCart from './components/YourCart';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/cart" element={<YourCart />} />
    </Routes> 
  );
}

export default App;
