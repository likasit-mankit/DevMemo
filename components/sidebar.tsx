"use client";

import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  // Define paths where the sidebar should be visible
  const sidebarPaths = ["/docs", "/cheatsheet"];
  const showSidebar = sidebarPaths.some((path) => pathname.startsWith(path));

  if (!showSidebar) return null;

  return (
    <aside className="hidden md:flex w-72 flex-col border-r border-divider py-6 px-4 shrink-0 overflow-y-auto">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold text-default-400 uppercase tracking-wider px-2">
          Documentation
        </p>
        <nav className="flex flex-col gap-1">
          <div className="h-8 w-full bg-default-100/50 rounded-lg animate-pulse" />
          <div className="h-8 w-full bg-default-100/50 rounded-lg animate-pulse mt-1" />
          <div className="h-8 w-full bg-default-100/50 rounded-lg animate-pulse mt-1" />
        </nav>
      </div>
    </aside>
  );
}
