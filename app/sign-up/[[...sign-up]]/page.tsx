import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="clerkAuthPage" aria-label="Create your account">
      <SignUp />
    </section>
  );
}
