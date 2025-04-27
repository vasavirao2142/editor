import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import Navbar from './components/Navbar'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
