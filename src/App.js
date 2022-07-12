import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header />

      <Routes>
        <Route path='/' exact />
      </Routes>

    </Router>
    </>
  )
}

export default App
