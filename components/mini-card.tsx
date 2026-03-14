import { Card, CardBody } from "@heroui/card";
import NextLink from "next/link";
import { getIcon } from "@/config/icon-lib";

interface MiniCardProps {
  title: string;
  icon: React.ReactNode | string;
  href?: string;
  className?: string;
}

export const MiniCard = ({ title, icon, href = "#", className }: MiniCardProps) => {
  const renderedIcon = typeof icon === "string" ? getIcon(icon) : icon;

  return (
    <Card
      isPressable
      as={NextLink}
      href={href}
      className={`group w-full aspect-square bg-white shadow-sm hover:shadow-xl dark:bg-[#1e293b]/40 dark:hover:bg-[#1e293b]/80 border border-divider dark:border-white/5 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-500 rounded-2xl overflow-hidden ${className}`}
    >
      <CardBody className="flex flex-col items-center justify-center gap-4 p-4 text-center">
        <div className="flex items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/30 group-hover:bg-cyan-500/10 group-hover:scale-120 transition-all duration-500 text-6xl">
          {renderedIcon}
        </div>
        <p className="text-xs sm:text-md font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
          {title}
        </p>
      </CardBody>
    </Card>
  );
};
