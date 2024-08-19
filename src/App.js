import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard2 from './pages/Dashboard2';
import Dashboard1 from './pages/Dashboard1';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today-sales" element={<Dashboard1 />} />
        <Route path="/sales-comparison" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
}

export default App;
