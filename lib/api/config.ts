export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + '/api',
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT) || 30000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const;
