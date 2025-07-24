import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Card,
  CardContent,
  Container, 
  Dialog,
  DialogContent,
  DialogTitle,
  Grid as MuiGrid,
  IconButton,
  Stack, 
  Typography, 
  useTheme,
  useMediaQuery,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  keyframes,
} from '@mui/material';
import { 
  SportsCricket as CricketIcon,
  SportsBaseball as PickleballIcon,
  Close as CloseIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Pulse animation for the "Booking Open Now" indicator
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [openSportModal, setOpenSportModal] = useState(false);

  const handleOpenSportModal = () => {
    setOpenSportModal(true);
  };

  const handleCloseSportModal = () => {
    setOpenSportModal(false);
  };

  const handleSportSelect = (sport: string) => {
    handleCloseSportModal();
    navigate(`/booking/${sport}`);
  };

  return (
    <Box>
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
          minHeight: { xs: '70vh', md: '90vh' },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: colors.background.paper,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: colors.gradient.primary,
            opacity: 0.9,
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 4, md: 6 } }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
          >
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: { xs: '100%', md: '70%' } }}>
              <Typography
                variant={isMobile ? "h3" : "h1"}
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: { xs: 2, md: 3 },
                  color: 'white',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem', lg: '5.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Lonavala's Premier
                <br />
                Sports Destination
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  mb: { xs: 3, md: 4 }, 
                  color: 'rgba(255,255,255,0.95)',
                  maxWidth: { xs: '100%', md: '90%' },
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                Experience the thrill of sports amidst scenic mountain views.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ mt: 2 }}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={handleOpenSportModal}
                  sx={{ 
                    py: { xs: 1.5, md: 2 }, 
                    px: { xs: 3, md: 4 },
                    borderRadius: 3,
                    bgcolor: colors.primary.main,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: colors.primary.dark,
                    },
                  }}
                >
                  Book Now
                </Button>
                
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => window.open('https://www.google.com/maps/dir/19.0744702,72.8869927/Gat+no+69+%2F32,+Turf+N+Lonavala,+Railway+station,+boraj+road,+near+Malavli,+Malavli,+Lonavala,+Maharashtra+410401/@18.9891161,72.8523087,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2ab70d00a1c5f:0xe9c8a48745dd469c!2m2!1d73.4835825!2d18.7451839?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                  sx={{ 
                    py: { xs: 1.5, md: 2 }, 
                    px: { xs: 3, md: 4 },
                    borderRadius: 3,
                    borderWidth: 2,
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  View Location
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Sport Selection Modal */}
      <Dialog
        open={openSportModal}
        onClose={handleCloseSportModal}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            bgcolor: colors.background.paper,
            overflow: 'hidden',
          }
        }}
      >
        <DialogTitle sx={{ 
          p: { xs: 2, md: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: colors.primary.main,
          color: 'white',
        }}>
          <Typography variant="h6" component="div" fontWeight={600}>
            Select Sport
          </Typography>
          <IconButton onClick={handleCloseSportModal} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, md: 3 }, bgcolor: colors.background.default }}>
          <Stack spacing={3}>
            <Button
              variant="contained"
              size="large"
              startIcon={<CricketIcon />}
              onClick={() => handleSportSelect('cricket')}
              sx={{ 
                py: { xs: 2, md: 2.5 },
                px: { xs: 3, md: 4 },
                justifyContent: 'flex-start',
                borderRadius: 3,
                bgcolor: colors.primary.main,
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.125rem' },
                boxShadow: '0 8px 20px rgba(56, 142, 60, 0.3)',
                '&:hover': {
                  bgcolor: colors.primary.dark,
                  transform: 'translateY(-2px) scale(1.02)',
                  boxShadow: '0 12px 28px rgba(56, 142, 60, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(0) scale(0.98)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Cricket
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<PickleballIcon />}
              onClick={() => handleSportSelect('pickleball')}
              sx={{
                py: { xs: 2, md: 2.5 },
                px: { xs: 3, md: 4 },
                justifyContent: 'flex-start',
                borderRadius: 3,
                bgcolor: colors.accent.main,
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.125rem' },
                boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)',
                '&:hover': {
                  bgcolor: colors.accent.dark,
                  transform: 'translateY(-2px) scale(1.02)',
                  boxShadow: '0 12px 28px rgba(25, 118, 210, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(0) scale(0.98)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Pickleball
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>

      {/* Rate Card */}
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: colors.background.default }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              component="h2" 
              align="center"
              fontWeight={700}
              sx={{ 
                mb: { xs: 3, md: 6 },
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                color: colors.primary.dark,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Rate Chart
            </Typography>
            
            {/* Desktop/Tablet Rate Chart */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 6,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                  border: `3px solid ${colors.primary.light}`,
                  mb: 5,
                }}
              >
                <Box
                  sx={{
                    background: colors.gradient.primary,
                    py: 3,
                    px: 4,
                  }}
                >
                  <MuiGrid container spacing={3} alignItems="center">
                    <MuiGrid size={3}>
                      <Typography variant="h6" fontWeight={700} color="white" align="center">
                        Days
                      </Typography>
                    </MuiGrid>
                    <MuiGrid size={3}>
                      <Typography variant="h6" fontWeight={700} color="white" align="center">
                        Time Slot
                      </Typography>
                    </MuiGrid>
                    <MuiGrid size={2}>
                      <Typography variant="h6" fontWeight={700} color="white" align="center">
                        Duration
                      </Typography>
                    </MuiGrid>
                    <MuiGrid size={4}>
                      <Typography variant="h6" fontWeight={700} color="white" align="center">
                        Charges
                      </Typography>
                    </MuiGrid>
                  </MuiGrid>
                </Box>

                {/* Rate Rows */}
                {[
                  { days: 'Monday - Thursday', time: '6:30 AM - 6:30 PM', duration: '1 Hour', price: '₹700', bgColor: 'rgba(56, 142, 60, 0.05)' },
                  { days: 'Monday - Thursday', time: '6:30 PM - 6:30 AM', duration: '1 Hour', price: '₹1000', bgColor: 'rgba(56, 142, 60, 0.02)' },
                  { days: 'Friday - Sunday', time: '6:30 AM - 6:30 PM', duration: '1 Hour', price: '₹1000', bgColor: 'rgba(56, 142, 60, 0.05)' },
                  { days: 'Friday - Sunday', time: '6:30 PM - 6:30 AM', duration: '1 Hour', price: '₹1300', bgColor: 'rgba(56, 142, 60, 0.02)' },
                ].map((row, index) => (
                  <Box
                    key={index}
                    sx={{
                      bgcolor: row.bgColor,
                      py: 3,
                      px: 4,
                      borderBottom: index < 3 ? `1px solid ${colors.primary.light}20` : 'none',
                    }}
                  >
                    <MuiGrid container spacing={3} alignItems="center">
                      <MuiGrid size={3}>
                        <Typography variant="body1" fontWeight={600} color={colors.text.primary} align="center">
                          {row.days}
                        </Typography>
                      </MuiGrid>
                      <MuiGrid size={3}>
                        <Typography variant="body1" color={colors.text.secondary} align="center">
                          {row.time}
                        </Typography>
                      </MuiGrid>
                      <MuiGrid size={2}>
                        <Typography variant="body1" color={colors.text.secondary} align="center">
                          {row.duration}
                        </Typography>
                      </MuiGrid>
                      <MuiGrid size={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            sx={{
                              color: colors.primary.main,
                              bgcolor: colors.background.paper,
                              px: 3,
                              py: 1,
                              borderRadius: 3,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            }}
                          >
                            {row.price}
                          </Typography>
                        </Box>
                      </MuiGrid>
                    </MuiGrid>
                  </Box>
                ))}
              </Paper>
            </Box>

            {/* Mobile Rate Chart */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Stack spacing={3} sx={{ mb: 4 }}>
                {[
                  { days: 'Monday - Thursday', time: '6:30 AM - 6:30 PM', duration: '1 Hour', price: '₹700' },
                  { days: 'Monday - Thursday', time: '6:30 PM - 6:30 AM', duration: '1 Hour', price: '₹1000' },
                  { days: 'Friday - Sunday', time: '6:30 AM - 6:30 PM', duration: '1 Hour', price: '₹1000' },
                  { days: 'Friday - Sunday', time: '6:30 PM - 6:30 AM', duration: '1 Hour', price: '₹1300' },
                ].map((row, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      border: `2px solid ${colors.primary.light}`,
                    }}
                  >
                    <Box
                      sx={{
                        background: colors.gradient.primary,
                        py: 2,
                        px: 3,
                      }}
                    >
                      <Typography variant="h6" fontWeight={700} color="white" align="center">
                        {row.days}
                      </Typography>
                    </Box>
                    <Box sx={{ p: 3, bgcolor: colors.background.paper }}>
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color={colors.text.secondary} fontWeight={500}>
                            Time Slot:
                          </Typography>
                          <Typography variant="body1" fontWeight={600} color={colors.text.primary}>
                            {row.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color={colors.text.secondary} fontWeight={500}>
                            Duration:
                          </Typography>
                          <Typography variant="body1" fontWeight={600} color={colors.text.primary}>
                            {row.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
                          <Typography variant="body2" color={colors.text.secondary} fontWeight={500}>
                            Charges:
                          </Typography>
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            sx={{
                              color: colors.primary.main,
                              bgcolor: colors.primary.light + '20',
                              px: 2,
                              py: 0.5,
                              borderRadius: 2,
                            }}
                          >
                            {row.price}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
              <Button 
                variant="contained"
                size="large"
                onClick={handleOpenSportModal}
                sx={{ 
                  py: { xs: 2.5, sm: 3, md: 3.5 }, 
                  px: { xs: 6, sm: 8, md: 12 },
                  borderRadius: 5,
                  background: colors.gradient.primary,
                  boxShadow: '0 12px 32px rgba(56, 142, 60, 0.4)',
                  fontWeight: 800,
                  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                  textTransform: 'none',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `3px solid ${colors.primary.light}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: colors.gradient.secondary,
                    transition: 'left 0.4s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.03)',
                    boxShadow: '0 20px 40px rgba(56, 142, 60, 0.5)',
                    borderColor: colors.secondary.main,
                    '&::before': {
                      left: 0,
                    },
                  },
                  '&:active': {
                    transform: 'translateY(-2px) scale(1.01)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '& > span': {
                    position: 'relative',
                    zIndex: 1,
                  }
                }}
              >
                <Box component="span" sx={{ position: 'relative', zIndex: 1 }}>
                  Book Your Slot Now
                </Box>
              </Button>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mt: 2,
                  color: colors.text.secondary,
                  textAlign: 'center',
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Available 24/7 • Cricket & Pickleball • Instant Confirmation
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                mt: 1,
                color: colors.primary.main,
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                <Box component="span" sx={{ 
                  width: 8, 
                  height: 8, 
                  borderRadius: '50%', 
                  bgcolor: colors.primary.main,
                  animation: `${pulse} 2s infinite`
                }} />
                Booking Open Now
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;