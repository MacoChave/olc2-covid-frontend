import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';
import { Report } from './pages/report';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        {/* <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/report' element={<Report />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
