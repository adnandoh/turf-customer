import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'http://localhost:8000';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types for API responses
export interface Slot {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  start_time_formatted?: string;
  end_time_formatted?: string;
  is_blocked: boolean;
  is_booked?: boolean;
  user_name?: string;
  price?: number;
}

export interface BookingRequest {
  slot: number;
  user_name: string;
  user_email: string;
  user_phone: string;
}

export interface BookingResponse {
  id: number;
  slot: Slot;
  user_name: string;
  user_email: string;
  user_phone: string;
  created_at: string;
}

// Cricket APIs
export const cricketService = {
  getAvailableSlots: (date: string) => {
    return api.get<Slot[]>(`/api/cricket/slots/?date=${date}`);
  },
  
  createBooking: (bookingData: BookingRequest) => {
    return api.post<BookingResponse>('/api/cricket/bookings/', bookingData);
  },
  
  cancelBooking: (id: number) => {
    return api.delete(`/api/cricket/bookings/${id}/`);
  }
};

// Pickle Ball APIs
export const pickleballService = {
  getAvailableSlots: (date: string) => {
    return api.get<Slot[]>(`/api/pickleball/slots/?date=${date}`);
  },
  
  createBooking: (bookingData: BookingRequest) => {
    return api.post<BookingResponse>('/api/pickleball/bookings/', bookingData);
  },
  
  cancelBooking: (id: number) => {
    return api.delete(`/api/pickleball/bookings/${id}/`);
  }
};

export default api;