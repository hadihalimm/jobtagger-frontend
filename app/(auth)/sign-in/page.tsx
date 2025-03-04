import SignInButton from '@/components/SignInButton';

export default function SignInAction() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-y-8">
      <h1 className="text-3xl font-bold text-mint-700">Sign in</h1>
      <SignInButton />
    </section>
  );
}
