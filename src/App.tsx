import './App.css';
import Cards from './components/Cards';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Cards />} />
      {/* <Route path="/cart" elemnt={<YourCart />} /> */}
    </Routes>
    </div>
  );
}

export default App;
