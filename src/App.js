import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <Router>

                <Header />
                <Main />

                <Routes>
                <Route path='/' exact />
                </Routes>

            </Router>
        </>
    )
}

export default App
