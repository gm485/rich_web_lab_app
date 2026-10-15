import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="clerkAuthPage" aria-label="Sign in">
      <SignIn />
    </section>
  );
}
