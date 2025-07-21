import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import ThemeProvider from './theme/ThemeProvider';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookingPage from './pages/BookingPage/BookingPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { BookingProvider } from './contexts/BookingContext';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <BookingProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking/:sportType" element={<BookingPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </Layout>
          </Router>
        </BookingProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App; 