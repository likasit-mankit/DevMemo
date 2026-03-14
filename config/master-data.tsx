import { VSIcon, GitIcon, HTMLIcon, CSSIcon, TSIcon, JSIcon } from "@/components/tech-icons";
import React from "react";
import { gitData } from "./pages/git";

export const masterData = {
  header: {
    version: "v1.0.0 Stable",
    title: "DEVMEMO",
    titleAccent: "ENGINE",
    description: "Elevate your workflow with curated code blueprints and syntax fast-tracks.",
    suffix: "Built by devs, for devs.",
    hideSidebar: true,
  },
  categories: [
    { label: "คอร์สเรียนฟรี", href: "#", variant: "flat" as const },
    { label: "คอร์สเรียน Workshop", href: "#", variant: "flat" as const },
    { label: "สูตรโกงเขียนโค้ด", href: "#", variant: "solid" as const, color: "primary" as const },
  ],
  cheatsheets: [
    { title: "Keyboard", icon: "⌨️", href: "/docs/keyboard" },
    { title: "VS Code", icon: React.createElement(VSIcon, { className: "w-8 h-8 text-[#007acc]" }), href: "/docs/vscode" },
    { title: "Git", icon: React.createElement(GitIcon, { className: "w-8 h-8 text-[#f05032]" }), href: "/docs/git" },
    { title: "HTML", icon: React.createElement(HTMLIcon, { className: "w-8 h-8 text-[#e34f26]" }), href: "/docs/html" },
    { title: "CSS", icon: React.createElement(CSSIcon, { className: "w-8 h-8 text-[#1572b6]" }), href: "/docs/css" },
    { title: "Bootstrap", icon: "B", href: "/docs/bootstrap", className: "text-[#7952b3] font-black text-2xl" },
    { title: "Tailwind", icon: "🌊", href: "/docs/tailwind", className: "text-[#06b6d4]" },
    { title: "JavaScript", icon: React.createElement(JSIcon, { className: "w-8 h-8 text-[#f7df1e]" }), href: "/docs/javascript" },
    { title: "jQuery", icon: "jQ", href: "/docs/jquery", className: "text-[#0769ad] font-bold" },
    { title: "TypeScript", icon: React.createElement(TSIcon, { className: "w-8 h-8 text-[#3178c6]" }), href: "/docs/typescript" },
    { title: "Node.js", icon: "JS", href: "/docs/nodejs", className: "text-[#339933] font-bold" },
    { title: "SQL", icon: "DB", href: "/docs/sql", className: "text-[#4479a1] font-bold" },
  ],
  sidebar: {
    title: "Documentation",
    links: [
      { label: "Introduction", href: "/docs" },
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Components", href: "/docs/components" },
    ]
  },
  pageConfigs: {
    "/docs/git": gitData,
  } as Record<string, any>
};
