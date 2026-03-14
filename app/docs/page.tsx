import { masterData } from "@/config/master-data";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { MiniCard } from "@/components/mini-card";

export default function DocsPage() {
  const { header, categories, cheatsheets } = masterData;

  return (
    <div className="flex flex-col gap-8 w-full py-2">
      {/* Header Section */}
      <Card className="w-full h-[350px] bg-slate-950 border-none relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-teal-900/40 animate-gradient-slow" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-700" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl group-hover:bg-fuchsia-500/30 transition-colors duration-700" />

        <CardBody className="relative z-10 py-8 px-6 sm:px-10 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono uppercase tracking-widest">
              {header.version}
            </span>
            <span className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tighter">
            {header.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">{header.titleAccent}</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base font-mono max-w-2xl leading-relaxed">
            <span className="text-cyan-500 font-bold">&gt;</span> {header.description}
            <span className="hidden sm:inline"> {header.suffix}</span>
          </p>
        </CardBody>
      </Card>

      {/* Categories Toolbar */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat, i) => (
          <Button
            key={i}
            variant={cat.variant}
            color={cat.color as any}
            className={cat.variant === "flat" ? "bg-[#1e293b]/50 hover:bg-[#1e293b] border border-white/5" : "shadow-lg shadow-blue-500/20"}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Cheatsheet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {cheatsheets.map((item, i) => (
          <MiniCard
            key={i}
            title={item.title}
            icon={item.icon}
            href={item.href}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
}
