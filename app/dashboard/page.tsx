import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";

import DashboardPanel from '../components/navigation/DashboardPanel'

export default async function DashboardPage() {
  const { userId, isAuthenticated, redirectToSignIn } = await auth();

 const user = await currentUser();

  const name = user?.firstName ?? "Guest";

  const surName = user?.lastName ?? "User";

  if (!isAuthenticated) {
    return redirectToSignIn();
  }


  return (
    <section className="dashboardPage" aria-labelledby="dashboard-title">
      <p className="eyebrow">YOUR WORKSPACE</p>
      <h1 id="dashboard-title">Dashboard</h1>
      <p className="description">A quick overview of your account.</p>

      <DashboardPanel title={`Welcome, ${name} ${surName}`}>
        <p>You are signed in and ready to use the app.</p>
        <p className="dashboardIdentity">
          Account ID <code>{userId}</code>
        </p>
      </DashboardPanel>
    </section>
  );
}
