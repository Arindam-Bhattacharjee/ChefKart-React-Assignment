
import Home from "./components/Home";
import IngPage from "./components/IngPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ingredients' element={<IngPage />} />
    </Routes>
  );
}

export default App;
