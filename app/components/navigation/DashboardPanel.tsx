import type { ReactNode } from "react";

//dashboard panel types
type DashboardPanelProps = {
    title: String;
    children: ReactNode;
}

export default function DashboardPanel({
  children, title
}: DashboardPanelProps
) {
  return (
    <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-4 text-center text-neutral-900 shadow-sm">
        <h2 className="p-5 text-xl font-semibold">{title}</h2>
        <div>{children}</div>
    </div>
  );
}
