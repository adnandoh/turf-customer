import React from 'react';
import { Box, Container, Typography, useTheme, Fab, Paper, Grid as MuiGrid } from '@mui/material';
import { WhatsApp as WhatsAppIcon, Phone as PhoneIcon, LocationOn as LocationIcon, Email as EmailIcon } from '@mui/icons-material';
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

const Contact = () => {
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
              Contact Us
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
              Get in touch with us for bookings and inquiries
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <MuiGrid container spacing={4}>
            <MuiGrid size={{ xs: 12, md: 6 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: `2px solid ${colors.primary.light}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ color: colors.accent.main, mr: 2, fontSize: 32 }} />
                  <Typography variant="h5" fontWeight={600} color={colors.text.primary}>
                    Call Us
                  </Typography>
                </Box>
                <Typography variant="h6" color={colors.primary.main} sx={{ mb: 1 }}>
                  +91 84689 42754
                </Typography>
                <Typography variant="body1" color={colors.text.secondary}>
                  Available 24/7 for bookings and support
                </Typography>
              </Paper>
            </MuiGrid>

            <MuiGrid size={{ xs: 12, md: 6 }}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: `2px solid ${colors.primary.light}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <WhatsAppIcon sx={{ color: colors.primary.main, mr: 2, fontSize: 32 }} />
                  <Typography variant="h5" fontWeight={600} color={colors.text.primary}>
                    WhatsApp
                  </Typography>
                </Box>
                <Typography variant="h6" color={colors.primary.main} sx={{ mb: 1 }}>
                  +91 84689 42754
                </Typography>
                <Typography variant="body1" color={colors.text.secondary}>
                  Quick responses and instant booking confirmation
                </Typography>
              </Paper>
            </MuiGrid>

            <MuiGrid size={12}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: `2px solid ${colors.primary.light}`,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationIcon sx={{ color: colors.secondary.main, mr: 2, fontSize: 32 }} />
                  <Typography variant="h5" fontWeight={600} color={colors.text.primary}>
                    Visit Us
                  </Typography>
                </Box>
                <Typography variant="h6" color={colors.primary.main} sx={{ mb: 1 }}>
                  Turf N Lonavala
                </Typography>
                <Typography variant="body1" color={colors.text.secondary} sx={{ mb: 2 }}>
                  Gat no 69/32, Railway station, boraj road, near Malavli, Malavli, Lonavala, Maharashtra 410401
                </Typography>
                <Typography variant="body2" color={colors.text.secondary}>
                  Located in the scenic hills of Lonavala with easy access from Mumbai and Pune
                </Typography>
              </Paper>
            </MuiGrid>
          </MuiGrid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 