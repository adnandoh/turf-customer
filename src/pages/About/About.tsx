import React from 'react';
import { Box, Container, Typography, useTheme, Fab } from '@mui/material';
import { WhatsApp as WhatsAppIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Enhanced Sports/Turf theme colors
const colors = {
  primary: {
    main: '#388e3c', // Rich grass green
    dark: '#2e7d32', // Deep forest green
    light: '#66bb6a', // Vibrant light green
  },
  secondary: {
    main: '#ff5722', // Bold orange-red
    dark: '#d84315', // Deep orange
    light: '#ff7043', // Bright orange
  },
  accent: {
    main: '#1976d2', // Royal blue
    dark: '#0d47a1', // Navy blue
    light: '#42a5f5', // Sky blue
  },
  background: {
    default: '#f8fffe', // Clean white with hint of green
    paper: '#ffffff',
  },
  text: {
    primary: '#1b2e35', // Deep charcoal
    secondary: '#455a64', // Steel grey
  },
  gradient: {
    primary: 'linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)',
    secondary: 'linear-gradient(45deg, #ff5722 30%, #d84315 90%)',
    accent: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: colors.background.default, minHeight: '100vh' }}>
      {/* Call Button */}
      <Fab
        color="secondary"
        aria-label="call"
        sx={{
          position: 'fixed',
          bottom: 90,
          right: 20,
          zIndex: 1000,
          backgroundColor: colors.accent.main,
          color: 'white',
          boxShadow: `0 4px 14px rgba(25, 118, 210, 0.25)`,
          '&:hover': {
            backgroundColor: colors.accent.dark,
            transform: 'scale(1.1)',
            boxShadow: `0 6px 18px rgba(25, 118, 210, 0.35)`,
          },
          transition: 'all 0.3s ease',
        }}
        href="tel:+918468942754"
      >
        <PhoneIcon />
      </Fab>

      {/* WhatsApp Button */}
      <Fab
        color="primary"
        aria-label="whatsapp"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: colors.primary.main,
          color: 'white',
          boxShadow: `0 4px 14px rgba(56, 142, 60, 0.25)`,
          '&:hover': {
            backgroundColor: colors.primary.dark,
            transform: 'scale(1.1)',
            boxShadow: `0 6px 18px rgba(56, 142, 60, 0.35)`,
          },
          transition: 'all 0.3s ease',
        }}
        href="https://wa.me/8468942754"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </Fab>

      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background.paper,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: colors.gradient.primary,
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: colors.gradient.primary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: colors.primary.main,
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                color: colors.text.secondary,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Discover Lonavala's premier sports destination with world-class facilities
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 
