import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './theme/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingPolicy from './pages/BookingPolicy';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking-policy" element={<BookingPolicy />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </Layout>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 