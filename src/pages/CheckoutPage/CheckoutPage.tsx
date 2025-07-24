import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Grid as MuiGrid,
  Divider,
  Backdrop,
  CircularProgress,
  Fab
} from '@mui/material';
import { WhatsApp as WhatsAppIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useBooking } from '../../contexts/BookingContext';
import { useSnackbar } from 'notistack';

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

// Helper function to format time for display
const formatTimeDisplay = (time?: string): string => {
  if (!time) return '';
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Form state
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: ''
  });

  // Form validation
  const [formErrors, setFormErrors] = useState({
    user_name: false,
    user_email: false,
    user_phone: false
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get booking context
  const {
    selectedDate,
    slots,
    selectedSlots,
    sportType,
    calculateTotalPrice,
    createBooking,
    clearSelectedSlots,
    loading
  } = useBooking();

  // Redirect if no slots are selected
  useEffect(() => {
    if (!selectedSlots.length || !sportType) {
      navigate('/');
    }
  }, [selectedSlots, sportType, navigate]);

  // Get selected slot details
  const getSelectedSlotDetails = () => {
    return selectedSlots.map(slotId => {
      const slot = slots.find(s => s.id === slotId);
      return slot ? {
        id: slot.id,
        date: slot.date,
        startTime: formatTimeDisplay(slot.start_time),
        endTime: formatTimeDisplay(slot.end_time)
      } : null;
    }).filter(Boolean);
  };

  const selectedSlotDetails = useMemo(() => getSelectedSlotDetails(), [selectedSlots, slots]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors = {
      user_name: !formData.user_name.trim(),
      user_email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email),
      user_phone: !/^\d{10}$/.test(formData.user_phone)
    };

    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      enqueueSnackbar('Please fill all required fields correctly', { variant: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await createBooking(formData);

      if (success) {
        enqueueSnackbar('Booking successful!', { variant: 'success' });
        clearSelectedSlots();
        navigate('/');
      } else {
        enqueueSnackbar('Failed to create booking. Please try again.', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      enqueueSnackbar('An error occurred while processing your booking', { variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 4, bgcolor: colors.background.default, minHeight: '100vh' }}>
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
      <Container maxWidth="md">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
            Complete Your Booking
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Please review your booking details and provide your information
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            mb: 4
          }}
        >
          <Typography variant="h6" gutterBottom>
            Booking Summary
          </Typography>

          <Box sx={{ mb: 3 }}>
            <MuiGrid container spacing={2}>
              <MuiGrid size={4}>
                <Typography variant="body2" color="text.secondary">
                  Sport:
                </Typography>
              </MuiGrid>
              <MuiGrid size={8}>
                <Typography variant="body1" fontWeight={500}>
                  {sportType === 'cricket' ? 'Cricket' : 'Pickleball'}
                </Typography>
              </MuiGrid>

              <MuiGrid size={4}>
                <Typography variant="body2" color="text.secondary">
                  Date:
                </Typography>
              </MuiGrid>
              <MuiGrid size={8}>
                <Typography variant="body1" fontWeight={500}>
                  {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
                </Typography>
              </MuiGrid>

              <MuiGrid size={4}>
                <Typography variant="body2" color="text.secondary">
                  Selected Slots:
                </Typography>
              </MuiGrid>
              <MuiGrid size={8}>
                {selectedSlotDetails.map((slot, index) => (
                  <Typography key={index} variant="body1" fontWeight={500} sx={{ mb: 0.5 }}>
                    {slot?.startTime} - {slot?.endTime}
                  </Typography>
                ))}
              </MuiGrid>

              <MuiGrid size={4}>
                <Typography variant="body2" color="text.secondary">
                  Duration:
                </Typography>
              </MuiGrid>
              <MuiGrid size={8}>
                <Typography variant="body1" fontWeight={500}>
                  {selectedSlots.length} hour{selectedSlots.length > 1 ? 's' : ''}
                </Typography>
              </MuiGrid>
            </MuiGrid>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6">
              Total Amount:
            </Typography>
            <Typography variant="h6" fontWeight={700} color="primary">
              ₹{calculateTotalPrice()}
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={0}
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            mb: 4
          }}
        >
          <Typography variant="h6" gutterBottom>
            Your Information
          </Typography>

          <MuiGrid container spacing={3}>
            <MuiGrid size={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="user_name"
                variant="outlined"
                value={formData.user_name}
                onChange={handleInputChange}
                error={formErrors.user_name}
                helperText={formErrors.user_name ? "Name is required" : ""}
              />
            </MuiGrid>

            <MuiGrid size={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                name="user_email"
                type="email"
                variant="outlined"
                value={formData.user_email}
                onChange={handleInputChange}
                error={formErrors.user_email}
                helperText={formErrors.user_email ? "Valid email is required" : ""}
              />
            </MuiGrid>

            <MuiGrid size={12}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="user_phone"
                variant="outlined"
                value={formData.user_phone}
                onChange={handleInputChange}
                error={formErrors.user_phone}
                helperText={formErrors.user_phone ? "Valid 10-digit phone number is required" : ""}
                slotProps={{ htmlInput: { maxLength: 10 } }}
              />
            </MuiGrid>
          </MuiGrid>
        </Paper>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 3,
          mt: 5
        }}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleGoBack}
            disabled={isSubmitting}
            sx={{
              py: 2.5,
              px: 6,
              borderRadius: 4,
              borderWidth: 2,
              borderColor: colors.text.secondary,
              color: colors.text.secondary,
              fontWeight: 700,
              fontSize: '1.125rem',
              textTransform: 'none',
              '&:hover': {
                borderWidth: 2,
                borderColor: colors.primary.main,
                color: colors.primary.main,
                bgcolor: 'rgba(56, 142, 60, 0.05)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Back
          </Button>

          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={isSubmitting}
            sx={{
              py: 2.5,
              px: 6,
              borderRadius: 4,
              background: isSubmitting ? colors.text.secondary : colors.gradient.primary,
              color: 'white',
              fontWeight: 800,
              fontSize: '1.125rem',
              textTransform: 'none',
              boxShadow: '0 8px 24px rgba(56, 142, 60, 0.3)',
              '&:hover': {
                background: isSubmitting ? colors.text.secondary : colors.gradient.secondary,
                transform: isSubmitting ? 'none' : 'translateY(-2px)',
                boxShadow: isSubmitting ? '0 8px 24px rgba(56, 142, 60, 0.3)' : '0 12px 32px rgba(56, 142, 60, 0.4)',
              },
              '&:active': {
                transform: isSubmitting ? 'none' : 'translateY(0)',
              },
              '&:disabled': {
                background: colors.text.secondary,
                color: 'white',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Booking'}
          </Button>
        </Box>
      </Container>

      {/* Loading Indicator */}
      <Backdrop
        sx={{ color: '#fff', zIndex: 9999 }}
        open={isSubmitting || loading}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CircularProgress color="inherit" />
          <Typography sx={{ mt: 2 }}>
            {isSubmitting ? 'Processing your booking...' : 'Loading...'}
          </Typography>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default CheckoutPage;