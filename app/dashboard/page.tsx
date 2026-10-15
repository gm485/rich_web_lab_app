import { auth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
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
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as: {userId}</p>

      {user && surName && <p>Welcome, {name} {surName}!</p>}

      <DashboardPanel title={surName}> </DashboardPanel>
      
    </div>
  );
}
