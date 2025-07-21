/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_TIMEOUT: string;
  readonly VITE_CRICKET_API_URL: string;
  readonly VITE_PICKLEBALL_API_URL: string;
  readonly VITE_BOOKING_API_URL: string;
  readonly VITE_AUTH_API_URL: string;
  readonly VITE_NODE_ENV: string;
  readonly VITE_DEBUG: string;
  readonly VITE_SITE_URL: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}