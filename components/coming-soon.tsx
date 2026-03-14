"use client";

import { useLanguage } from "@/components/language-provider";

interface ComingSoonProps {
  slug: string;
}

export const ComingSoon = ({ slug }: ComingSoonProps) => {
  const { language } = useLanguage();

  if (language === 'th') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center gap-7">
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
          <span className="text-7xl mb-10 relative z-10 block animate-bounce">🛠️</span>
        </div>
        <div className="flex flex-col gap-8 relative z-10">
          <h2 className="text-7xl font-black text-black dark:text-slate-400 tracking-tighter uppercase">
            กำลัง <span className="text-cyan-400">สร้าง</span>
          </h2>
          <p className="text-black dark:text-slate-400 font-mono text-xl max-w-md mx-auto">
            <span className="text-cyan-500 font-bold">&gt;</span> Module <code className="text-cyan-300">"{slug}"</code> กำลังถูกสร้างโดยวิศวกรของเรา
            โปรดกลับมาตรวจสอบอีกครั้งสำหรับคู่มือฉบับสมบูรณ์
          </p>
        </div>
        <div className="flex gap-2 mt-4 font-mono text-lg text-slate-600 uppercase tracking-[0.2em]">
          <span>Loading</span>
          <span className="animate-pulse">...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full text-center gap-6">
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
        <span className="text-7xl mb-10 relative z-10 block animate-bounce">🛠️</span>
      </div>
      <div className="flex flex-col gap-8 relative z-10">
        <h2 className="text-7xl font-black text-black dark:text-slate-400 tracking-tighter uppercase">
          Coming <span className="text-cyan-400">Soon</span>
        </h2>
        <p className="text-black dark:text-slate-400 font-mono text-xl max-w-md mx-auto">
          <span className="text-cyan-500 font-bold">&gt;</span> Module <code className="text-cyan-300">"{slug}"</code> is currently being compiled by our engineers.
          Check back later for the ultimate cheat sheet.
        </p>
      </div>
      <div className="flex gap-2 mt-4 font-mono text-lg text-slate-600 uppercase tracking-[0.2em]">
        <span>Loading</span>
        <span className="animate-pulse">...</span>
      </div>
    </div>
  );
};
