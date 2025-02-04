"use server";
import { signIn } from '../../../auth';  // Adjust path if needed
import { AuthError } from 'next-auth';

export async function authenticate(prevState, formData) {
  try {
    await signIn('credentials', {
      redirect: true,
      redirectTo: '/ui/dashboard', // Redirects to the dashboard upon successful login
      email: formData.get('email'),
      password: formData.get('password'),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials. Please try again.';
        default:
          return 'Something went wrong. Please try later.';
      }
    }
    throw error;
  }
}
