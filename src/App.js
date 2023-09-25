import './App.scss'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer.js'
import Header from './components/Header/Header.js'
function App() {
  
  return (
    <Router>
    <div className="app">
        <Header/>
        <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/movie/:imdbID" element={<MovieDetail/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
