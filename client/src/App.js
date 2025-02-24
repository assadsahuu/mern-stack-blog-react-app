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
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='projects' element={<Projects />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='signUp' element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
