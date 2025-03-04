'use client';

import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { SignIn } from '@/lib/action';

const SignInButton = () => {
  // const router = useRouter();
  const handleClick = async () => {
    window.location.href = await SignIn();
  };

  return (
    <Button
      className="gap-2 bg-white text-black hover:bg-gray-100 border-1"
      onClick={handleClick}>
      <Image src="/google.svg" width={20} height={20} alt="Google" />
      <p>Sign in with Google</p>
    </Button>
  );
};

export default SignInButton;
