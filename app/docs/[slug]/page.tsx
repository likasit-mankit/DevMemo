"use client";

import { useLanguage } from "@/components/language-provider";
import { masterData } from "@/config/master-data";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Snippet } from "@heroui/snippet";
import { addToast } from "@heroui/toast";
import { useParams } from "next/navigation";

import { ComingSoon } from "@/components/coming-soon";

export default function DynamicDocsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const config = masterData.pageConfigs[`/docs/${slug}`];
  const { language } = useLanguage();

  if (!config) {
    return <ComingSoon slug={slug} />;
  }



  // Fallback to "th" if translation doesn't exist
  const langData = config.content[language] || config.content["th"];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Premium Header Section */}
      <div className="relative flex flex-col gap-3 p-10 -mx-6 -mt-4 border-b border-divider overflow-hidden mb-6">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent -z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-6 bg-cyan-500 rounded-full" />
            <span className="text-md font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Technical Documentation
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            {config.title}
          </h1>
          <p className="font-mono text-sm text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-black/20 backdrop-blur-sm self-start px-3 py-1 rounded-md border border-slate-200 dark:border-white/5">
            <span className="text-cyan-500 font-bold mr-2">&gt;</span>
            {config.description}
          </p>
        </div>
      </div>

      {/* Masonry Layout implementation using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {langData.sections?.map((section: any, i: number) => (
          <div key={i} className="break-inside-avoid">
            <Card className="bg-white dark:bg-[#1e293b]/80 border-divider shadow-sm dark:shadow-xl h-full relative overflow-hidden transition-all duration-300">
              <CardHeader className="flex gap-2 items-center px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border-b border-divider">
                <span className="text-lg">{section.icon}</span>
                <h3 className="text-md font-bold text-slate-800 dark:text-slate-100">{section.title}</h3>
              </CardHeader>
              <CardBody className="px-5 py-3 gap-0">
                <div className="grid grid-cols-[1fr_1fr] bg-slate-100 dark:bg-slate-950/30 text-xs font-bold text-slate-500 dark:text-slate-300 px-3 py-2 rounded-t-md border-b border-divider uppercase tracking-widest mt-1">
                  <span>{section.type === 'vocabulary' ? 'Term' : 'Command'}</span>
                  <span>Description</span>
                </div>
                <div className="flex flex-col">
                  {section.items?.map((item: any, j: number) => (
                    <div
                      key={j}
                      className="group grid grid-cols-[1fr_1fr] gap-3 px-3 py-2.5 items-center text-sm border-b border-divider hover:bg-slate-50 dark:hover:bg-white/5 transition-colors even:bg-slate-50/50 dark:even:bg-black/10 odd:bg-transparent"
                    >
                      <Snippet
                        hideSymbol
                        disableTooltip
                        onCopy={() => addToast({
                          title: "Copied!",
                          color: "success",
                          variant: "flat",
                          timeout: 2000
                        })}
                        classNames={{
                          base: "p-0 bg-transparent text-cyan-600 dark:text-cyan-400 font-mono font-semibold items-start h-auto break-words whitespace-normal",
                          pre: "font-inherit text-inherit",
                          copyButton: "text-slate-400 hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity min-w-4 w-6 h-6 ml-1",
                        }}
                      >
                        {item.cmd}
                      </Snippet>
                      <div className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

