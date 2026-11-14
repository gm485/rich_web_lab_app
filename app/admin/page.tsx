import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  if (user.publicMetadata.role !== "admin") {
    redirect("/")
  }

  return (
    <main className="page">
      <p className="eyebrow">ADMIN</p>
      <h1>Admin dashboard</h1>
      <p className="description">Admin access confirmed.</p>
    </main>
  )
}
