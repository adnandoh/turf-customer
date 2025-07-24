import React, { useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Backdrop,
  CircularProgress,
  Fab
} from '@mui/material';
import { 
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  WbSunny as SunIcon,
  Nightlight as NightIcon,
  Add as AddIcon,
  Check as CheckIcon,
  ArrowBack as ArrowBackIcon,
  Info as InfoIcon,
  LightMode as MorningIcon,
  WbTwilight as EveningIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { format, addDays, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';
import { useBooking } from '../../contexts/BookingContext';
import { useSnackbar } from 'notistack';
import SEO from '../../components/SEO';

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

// Helper function to get price based on time
const getPriceForTime = (time: string): number => {
  const hour = parseInt(time.split(':')[0]);
  
  if (hour >= 4 && hour < 7) return 1200; // Early morning
  if (hour >= 7 && hour < 16) return 1500; // Morning and afternoon
  if (hour >= 16 && hour < 24) return 2000; // Evening
  return 1200; // Midnight (0-4)
};

// Helper function to format time display
const formatTimeDisplay = (startTime: string, endTime: string): string => {
  return `${startTime} - ${endTime}`;
};

const BookingPage = () => {
  const { sportType } = useParams<{ sportType: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { enqueueSnackbar } = useSnackbar();
  
  // Use the booking context
  const { 
    selectedDate, 
    setSelectedDate, 
    slots, 
    selectedSlots, 
    loading, 
    error, 
    setSportType, 
    fetchSlots, 
    toggleSlotSelection, 
    calculateTotalPrice 
  } = useBooking();
  
  // Generate dates for the calendar view (7 days)
  const today = new Date();
  const dateArray = Array.from({ length: 7 }, (_, i) => addDays(today, i));
  
  // Set sport type when component mounts or sportType param changes
  useEffect(() => {
    if (sportType === 'cricket' || sportType === 'pickleball') {
      setSportType(sportType);
    } else {
      // Redirect to home if invalid sport type
      navigate('/');
    }
  }, [sportType, setSportType, navigate]);
  
  // Fetch slots when date or sport type changes
  useEffect(() => {
    fetchSlots();
  }, [selectedDate, fetchSlots]);
  
  // Show error message if API call fails
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
    }
  }, [error, enqueueSnackbar]);
  
  // Group slots by time of day
  const groupSlotsByTimeOfDay = () => {
    if (!slots || slots.length === 0) return { morning: [], afternoon: [], evening: [], midnight: [] };
    
    return {
      morning: slots.filter(slot => {
        const hour = parseInt(slot.start_time.split(':')[0]);
        return hour >= 6 && hour < 12;
      }),
      afternoon: slots.filter(slot => {
        const hour = parseInt(slot.start_time.split(':')[0]);
        return hour >= 12 && hour < 16;
      }),
      evening: slots.filter(slot => {
        const hour = parseInt(slot.start_time.split(':')[0]);
        return hour >= 16 && hour < 22;
      }),
      midnight: slots.filter(slot => {
        const hour = parseInt(slot.start_time.split(':')[0]);
        return hour >= 22 || hour < 6;
      })
    };
  };
  
  const { morning: morningSlots, afternoon: afternoonSlots, evening: eveningSlots, midnight: midnightSlots } = groupSlotsByTimeOfDay();
  
  // Handle booking confirmation
  const handleBookNow = () => {
    if (selectedSlots.length > 0) {
      navigate('/checkout');
    }
  };
  
  // Handle go back
  const handleGoBack = () => {
    navigate('/');
  };
  
  // Render time slot card
  const renderTimeSlot = (slot: any) => {
    const isSelected = selectedSlots.includes(slot.id);
    // Use formatted time from backend if available, otherwise format manually
    const timeDisplay = slot.start_time_formatted && slot.end_time_formatted 
      ? `${slot.start_time_formatted} - ${slot.end_time_formatted}`
      : `${slot.start_time.split(':')[0]}:00 - ${slot.end_time.split(':')[0]}:00`;
    const price = slot.price || getPriceForTime(slot.start_time);
    
    return (
      <Box 
        key={slot.id}
        sx={{
          mb: 2,
          borderRadius: 4,
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          p: 2,
        }}>
          <Typography 
            sx={{ 
              fontSize: '1.1rem',
              fontWeight: 500,
              color: 'text.primary'
            }}
          >
            {timeDisplay}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              sx={{ 
                mr: 2, 
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'text.primary'
              }}
            >
              ₹{price}
            </Typography>
            
            <IconButton 
              onClick={() => toggleSlotSelection(slot.id)}
              sx={{ 
                color: isSelected ? 'white' : 'primary.main',
                bgcolor: isSelected ? 'primary.main' : 'transparent',
                border: isSelected ? 'none' : '1px solid',
                borderColor: 'primary.main',
                width: 32,
                height: 32,
                '&:hover': {
                  bgcolor: isSelected ? 'primary.dark' : 'primary.light',
                }
              }}
            >
              {isSelected ? <CheckIcon fontSize="small" /> : <AddIcon fontSize="small" />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

  const sportName = sportType === 'cricket' ? 'Cricket' : 'Pickleball';
  const sportDescription = sportType === 'cricket' 
    ? 'Book cricket field slots in Lonavala with TurfBook. Choose from morning, afternoon, evening, and midnight slots. Premium cricket ground with scenic mountain views.'
    : 'Book pickleball court slots in Lonavala with TurfBook. Professional pickleball courts available 24/7. Choose your preferred time slot and book instantly.';

  return (
    <>
      <SEO
        title={`${sportName} Booking`}
        description={sportDescription}
        keywords={`${sportType} booking lonavala, ${sportType} court rental, ${sportType} ground booking, sports facility ${sportType}, turf ${sportType} booking`}
        url={`https://turfbook.com/booking/${sportType}`}
      />
      <Box sx={{ bgcolor: colors.background.default, minHeight: '100vh', pb: 4 }}>
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
      {/* Header */}
      <Box sx={{ 
        bgcolor: 'white', 
        borderBottom: '1px solid', 
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <Container maxWidth="md" sx={{ py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleGoBack} sx={{ mr: 2 }}>
              <ArrowBackIcon />
            </IconButton>
            <Box>
              <Typography variant="h6" component="h1" fontWeight={600}>
                {sportType === 'cricket' ? 'Cricket Field' : 'Pickleball Court'}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md">
        {/* Date Selector */}
        <Box sx={{ my: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box 
              component="span"
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                color: 'primary.main',
                fontWeight: 500
              }}
            >
              <Box 
                component="span" 
                sx={{ 
                  bgcolor: 'primary.light',
                  color: 'primary.main',
                  p: 0.5,
                  borderRadius: 1,
                  display: 'inline-flex',
                  mr: 1
                }}
              >
                <Box component="span" role="img" aria-label="calendar">
                  📅
                </Box>
              </Box>
              <Typography variant="h6">July 2025</Typography>
            </Box>
          </Box>

          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <IconButton 
              sx={{ 
                position: 'absolute',
                left: { xs: -8, sm: -16 },
                zIndex: 2,
                bgcolor: 'background.paper',
                boxShadow: 1,
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 }
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Box 
              sx={{ 
                display: 'flex',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                px: 1,
                py: 1,
                flex: 1
              }}
            >
              {dateArray.map((date, index) => {
                const dayNumber = format(date, 'd');
                const dayName = format(date, 'EEE');
                const isToday = isSameDay(date, today);
                const isSelected = isSameDay(date, selectedDate);
                const labelText = index === 0 ? 'Today' : dayName;

                return (
                  <Box
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    sx={{
                      minWidth: { xs: 60, sm: 70 },
                      height: { xs: 60, sm: 70 },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 0.5,
                      borderRadius: 2,
                      cursor: 'pointer',
                      border: isSelected ? '2px solid' : '1px solid',
                      borderColor: isSelected ? 'primary.main' : 'divider',
                      bgcolor: isSelected ? 'white' : 'transparent',
                      boxShadow: isSelected ? 1 : 0,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                      }
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      color={isSelected ? 'primary.main' : 'text.secondary'}
                      fontWeight={500}
                    >
                      {labelText}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      fontWeight={600}
                      color={isSelected ? 'primary.main' : 'text.primary'}
                    >
                      {dayNumber}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <IconButton 
              sx={{ 
                position: 'absolute',
                right: { xs: -8, sm: -16 },
                zIndex: 2,
                bgcolor: 'background.paper',
                boxShadow: 1,
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 }
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Available Slots Header */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 2,
            pb: 2,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                Available Slots
              </Typography>
              <Typography 
                variant="h6" 
                fontWeight={600} 
                sx={{ 
                  ml: 2,
                  color: slots.length > 0 ? 'primary.main' : 'error.main'
                }}
              >
                {slots.length}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InfoIcon fontSize="small" sx={{ color: 'warning.main', mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary">
                Min. 60 mins slots
              </Typography>
            </Box>
          </Box>
          
          {/* Show blocked date message if no slots available */}
          {!loading && slots.length === 0 && (
            <Card sx={{ 
              bgcolor: 'error.light', 
              color: 'error.contrastText',
              mb: 3,
              border: '1px solid',
              borderColor: 'error.main'
            }}>
              <CardContent sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <InfoIcon sx={{ mr: 1, color: 'error.main' }} />
                  <Typography variant="h6" fontWeight={600} color="error.main">
                    Date Not Available
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.primary">
                  This date has been blocked for maintenance or special events.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Please select a different date to view available slots.
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>

        {/* Time Slots */}
        <Box sx={{ mb: 4 }}>
          {/* Morning Slots */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <MorningIcon sx={{ color: 'warning.main', mr: 1 }} />
              <Typography variant="h6" fontWeight={600} color="warning.main">
                Morning Slots
              </Typography>
            </Box>
            {morningSlots.map(slot => renderTimeSlot(slot))}
          </Box>

          {/* Afternoon Slots */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <SunIcon sx={{ color: 'warning.dark', mr: 1 }} />
              <Typography variant="h6" fontWeight={600} color="warning.dark">
                Afternoon Slots
              </Typography>
            </Box>
            {afternoonSlots.map(slot => renderTimeSlot(slot))}
          </Box>

          {/* Evening Slots */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <EveningIcon sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" fontWeight={600} color="primary.main">
                Evening Slots
              </Typography>
            </Box>
            {eveningSlots.map(slot => renderTimeSlot(slot))}
          </Box>

          {/* Midnight Slots */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <NightIcon sx={{ color: 'text.secondary', mr: 1 }} />
              <Typography variant="h6" fontWeight={600} color="text.secondary">
                Mid-Night Slots
              </Typography>
            </Box>
            {midnightSlots.map(slot => renderTimeSlot(slot))}
          </Box>
        </Box>

        {/* Fixed Book Now Button */}
        {selectedSlots.length > 0 && (
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{ 
              position: 'fixed', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              bgcolor: 'background.paper',
              borderTop: '1px solid',
              borderColor: 'divider',
              p: 2,
              zIndex: 10
            }}
          >
            <Container maxWidth="md">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" fontWeight={500}>
                  {selectedSlots.length} slot{selectedSlots.length > 1 ? 's' : ''} selected
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Total: ₹{calculateTotalPrice()}
                </Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleBookNow}
                sx={{ 
                  py: 2.5,
                  borderRadius: 4,
                  background: colors.gradient.primary,
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 24px rgba(56, 142, 60, 0.3)',
                  '&:hover': {
                    background: colors.gradient.secondary,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 32px rgba(56, 142, 60, 0.4)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Book Now
              </Button>
            </Container>
          </Box>
        )}
      </Container>

      {/* Loading Indicator */}
      {loading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: 9999 }}
          open={loading}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircularProgress color="inherit" />
            <Typography sx={{ mt: 2 }}>Loading slots...</Typography>
          </Box>
        </Backdrop>
      )}
    </Box>
  );
};

export default BookingPage; 