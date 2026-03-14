import React from "react";
import { Card, CardBody } from "@heroui/card";
import NextLink from "next/link";

interface MiniCardProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

export const MiniCard = ({ title, icon, href = "#", className }: MiniCardProps) => {
  return (
    <Card
      isPressable
      as={NextLink}
      href={href}
      className={`group w-full aspect-square bg-[#1e293b]/40 hover:bg-[#1e293b]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg ${className}`}
    >
      <CardBody className="flex flex-col items-center justify-center gap-4 p-4 text-center">
        <div className="flex items-center justify-center p-2 rounded-xl bg-slate-950/30 group-hover:bg-cyan-500/10 transition-colors duration-300">
          {icon}
        </div>
        <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-cyan-400 transition-colors leading-tight">
          {title}
        </p>
      </CardBody>
    </Card>
  );
};
