"use client";

import { usePathname } from "next/navigation";
import { masterData } from "@/config/master-data";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();
  const { sidebar, pageConfigs } = masterData;
  const config = pageConfigs[pathname] || {};

  // Define paths where the sidebar should be visible
  const sidebarPaths = ["/docs", "/cheatsheet"];
  const isTargetRoot = sidebarPaths.some((path) => pathname.startsWith(path));

  // Hide if explicitly configured, otherwise show if it's a target root
  const showSidebar = config.hideSidebar ? false : isTargetRoot;
  const showSidebar2 = masterData.header.hideSidebar ? false : isTargetRoot;

  if (!showSidebar) return null;
  if (!showSidebar2) return null;

  return (
    <aside className="hidden md:flex w-72 flex-col border-r border-divider py-6 px-4 shrink-0 overflow-y-auto">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold text-default-400 uppercase tracking-wider px-2">
          {sidebar.title}
        </p>
        <nav className="flex flex-col gap-1">
          {sidebar.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${pathname === link.href
                ? "bg-primary/10 text-primary font-medium"
                : "text-default-600 hover:bg-default-100"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
