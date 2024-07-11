import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
