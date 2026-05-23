import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ServiceDetails from './pages/ServiceDetails';

import ProtectedRoute from './routes/ProtectedRoute';

import { Toaster } from 'react-hot-toast';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/profile' element={<Profile />} />

        <Route
          path='/details'
          element={
            <ProtectedRoute>
              <ServiceDetails />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />

      <Toaster />

    </BrowserRouter>

  )
}

export default App;