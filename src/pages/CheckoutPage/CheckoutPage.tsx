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
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useBooking } from '../../contexts/BookingContext';
import { useSnackbar } from 'notistack';

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
    <Box sx={{ py: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
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
          mt: 4
        }}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleGoBack}
            disabled={isSubmitting}
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2
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
              py: 1.5,
              px: 4,
              borderRadius: 2
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