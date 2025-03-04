'use server';

import { cookies } from 'next/headers';

export async function SignIn() {
  return `${process.env.JOBTAGGER_API_URL}/auth/google`;
}

export async function getAccessToken() {
  return (await cookies()).get('access_token')?.value || null;
}

export async function getRefreshToken() {
  return (await cookies()).get('refresh_token')?.value || null;
}
