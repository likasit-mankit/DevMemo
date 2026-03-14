import React from "react";
import {
  SiGit,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiNodedotjs,
  SiPostgresql
} from "react-icons/si";
import { LucideKeyboard } from "lucide-react";
import { VscVscode } from "react-icons/vsc";

export const IconLib = {
  vscode: <VscVscode className="text-[#007acc]" />,
  git: <SiGit className="text-[#f05032]" />,
  html: <SiHtml5 className="text-[#e34f26]" />,
  css: <SiCss className="text-[#1572b6]" />,
  javascript: <SiJavascript className="text-[#f7df1e] bg-black" />,
  typescript: <SiTypescript className="text-[#3178c6]" />,
  tailwind: <SiTailwindcss className="text-[#06b6d4]" />,
  bootstrap: <SiBootstrap className="text-[#7952b3]" />,
  jquery: <SiJquery className="text-[#0769ad]" />,
  nodejs: <SiNodedotjs className="text-[#339933]" />,
  sql: <SiPostgresql className="text-[#4479a1]" />,
  keyboard: <LucideKeyboard />
};

export type IconType = keyof typeof IconLib;

export const getIcon = (name: string) => {
  return IconLib[name as IconType] || null;
};
