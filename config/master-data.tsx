import { VSIcon, GitIcon, HTMLIcon, CSSIcon, TSIcon, JSIcon } from "@/components/tech-icons";
import React from "react";
import { gitData } from "./pages/git";

export interface CheatsheetItem {
  title: string;
  icon: string | React.ReactNode;
  href: string;
  className?: string;
}

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
    { title: "Keyboard", icon: "keyboard", href: "/docs/keyboard" },
    { title: "VS Code", icon: "vscode", href: "/docs/vscode" },
    { title: "Git", icon: "git", href: "/docs/git" },
    { title: "HTML", icon: "html", href: "/docs/html" },
    { title: "CSS", icon: "css", href: "/docs/css" },
    { title: "Bootstrap", icon: "bootstrap", href: "/docs/bootstrap" },
    { title: "Tailwind", icon: "tailwind", href: "/docs/tailwind" },
    { title: "JavaScript", icon: "javascript", href: "/docs/javascript" },
    { title: "jQuery", icon: "jquery", href: "/docs/jquery" },
    { title: "TypeScript", icon: "typescript", href: "/docs/typescript" },
    { title: "Node.js", icon: "nodejs", href: "/docs/nodejs" },
    { title: "SQL", icon: "sql", href: "/docs/sql" },
  ] as CheatsheetItem[],
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
    "/docs/vscode": "",
    "/docs/keyboard": "",
    "/docs/html": "",
    "/docs/css": "",
    "/docs/bootstrap": "",
    "/docs/tailwind": "",
    "/docs/javascript": "",
    "/docs/jquery": "",
    "/docs/typescript": "",
    "/docs/nodejs": "",
    "/docs/sql": "",
  } as Record<string, any>
};
