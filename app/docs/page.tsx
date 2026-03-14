import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { CheatsheetCard } from "@/components/cheatsheet-card";

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8 w-full py-2">
      {/* Header Section */}
      <Card className="w-full h-[350px] bg-slate-950 border-none relative overflow-hidden group">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-teal-900/40 animate-gradient-slow" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-700" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl group-hover:bg-fuchsia-500/30 transition-colors duration-700" />

        <CardBody className="relative z-10 py-8 px-6 sm:px-10 flex flex-col justify-center gap-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono uppercase tracking-widest">
              v1.0.0 Stable
            </span>
            <span className="h-[1px] w-12 bg-slate-700" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tighter">
            DEVMEMO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">ENGINE</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base font-mono max-w-2xl leading-relaxed">
            <span className="text-cyan-500 font-bold">&gt;</span> Elevate your workflow with curated code blueprints and syntax fast-tracks.
            <span className="hidden sm:inline"> Built by devs, for devs.</span>
          </p>
        </CardBody>
      </Card>

      {/* Categories Toolbar */}
      <div className="flex flex-wrap gap-3">
        <Button variant="flat" className="bg-default-100/50 hover:bg-default-200">
          คอร์สเรียนฟรี
        </Button>
        <Button variant="flat" className="bg-default-100/50 hover:bg-default-200">
          คอร์สเรียน Workshop
        </Button>
        <Button color="primary" variant="solid">
          สูตรโกงเขียนโค้ด
        </Button>
      </div>

      {/* Cheatsheet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <CheatsheetCard title="Keyboard Shortcut" bgColor="bg-default-50" />
        <CheatsheetCard title="Visual Studio Code" bgColor="bg-slate-800" />
        <CheatsheetCard title="Git" bgColor="bg-slate-800" />
        <CheatsheetCard title="HTML" bgColor="bg-slate-800" />
        <CheatsheetCard title="CSS" bgColor="bg-slate-800" />
        <CheatsheetCard title="Bootstrap" bgColor="bg-slate-800" />
        <CheatsheetCard title="Tailwind CSS" bgColor="bg-slate-800" />
        <CheatsheetCard title="JavaScript" bgColor="bg-slate-800" />
        <CheatsheetCard title="jQuery" bgColor="bg-slate-800" />
        <CheatsheetCard title="TypeScript" bgColor="bg-slate-800" />
        <CheatsheetCard title="Node.js" bgColor="bg-slate-800" />
        <CheatsheetCard title="SQL" bgColor="bg-slate-800" />
      </div>

    </div>
  );
}
