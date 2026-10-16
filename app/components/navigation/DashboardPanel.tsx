import type { ReactNode } from "react";

//dashboard panel types
type DashboardPanelProps = {
    title: string;
    children: ReactNode;
}

export default function DashboardPanel({
  children, title
}: DashboardPanelProps
) {
  return (
    <div className="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center">
        <h2 className="p-5">{title}</h2>
        <div>{children}</div>
    </div>
  );
}