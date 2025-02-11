import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import TermsOfService from './components/TermsOfService';
import MITLicense from './components/MITLicense';
import FoodOrder from './components/FoodOrder';
import Favourite from './components/Favourite';
import Message from './components/Message';
import OrderHistory from './components/OrderHistory';
import Bills from './components/Bills';
import Settings from './components/Settings';

function App() {

  return (
    <Router>
      <div className="app-container">
       
        <div className="main-content">
          <main className="dashboard__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/license" element={<MITLicense />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/food-order" element={<FoodOrder />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/message" element={<Message />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
