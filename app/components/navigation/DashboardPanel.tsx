import type { ReactNode } from "react";

type DashboardPanelProps = {
  title: string;
  children: ReactNode;
}

export default function DashboardPanel({ children, title }: DashboardPanelProps) {
  return (
    <article className="dashboardPanel">
      <h2>{title}</h2>
      <div className="dashboardPanelContent">{children}</div>
    </article>
  );
}
