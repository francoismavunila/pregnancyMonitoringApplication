import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Articles from './pages/Articles';
import Monitor from './pages/Monitor';
import Tips from './pages/Tips';

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/tips" element={<Tips/>}/>
          <Route path="/monitor" element={<Monitor/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
