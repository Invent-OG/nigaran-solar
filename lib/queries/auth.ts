import { useMutation } from '@tanstack/react-query';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
}

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  return response.json();
};

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}