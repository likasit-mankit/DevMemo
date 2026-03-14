"use client";

import { useLanguage } from "@/components/language-provider";
import { masterData } from "@/config/master-data";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Snippet } from "@heroui/snippet";
import { useParams } from "next/navigation";

export default function DynamicDocsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const config = masterData.pageConfigs[`/docs/${slug}`];
  const { language } = useLanguage();

  if (!config) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <h2 className="text-xl font-mono text-default-500">404 - Not Found</h2>
      </div>
    );
  }

  // Fallback to "th" if translation doesn't exist
  const langData = config.content[language] || config.content["th"];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex flex-col gap-2 bg-slate-900/40 p-6 -mx-6 -mt-4 border-b border-white/5 shadow-inner">
        <h1 className="text-3xl font-black text-white">{config.title}</h1>
        <p className="text-slate-400 font-mono text-sm">{config.description}</p>
      </div>

      {/* Masonry Layout implementation using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {langData.sections?.map((section: any, i: number) => (
          <div key={i} className="break-inside-avoid shadow-xl rounded-xl">
            <Card className="bg-[#1e293b]/80 border-white/5 h-full relative overflow-hidden">
              <CardHeader className="flex gap-2 items-center px-5 py-4 bg-slate-900/50 border-b border-white/5">
                <span className="text-lg">{section.icon}</span>
                <h3 className="text-md font-bold text-slate-100">{section.title}</h3>
              </CardHeader>
              <CardBody className="px-5 py-3 gap-0">
                <div className="grid grid-cols-[1fr_1fr] bg-slate-950/30 text-xs font-bold text-slate-300 px-3 py-2 rounded-t-md border-b border-white/10 uppercase tracking-widest mt-1">
                  <span>{section.type === 'vocabulary' ? 'Term' : 'Command'}</span>
                  <span>Description</span>
                </div>
                <div className="flex flex-col">
                  {section.items?.map((item: any, j: number) => (
                    <div
                      key={j}
                      className="group grid grid-cols-[1fr_1fr] gap-3 px-3 py-2.5 items-center text-sm border-b border-white/5 hover:bg-white/5 transition-colors even:bg-black/10 odd:bg-transparent"
                    >
                      <Snippet 
                        hideSymbol
                        disableTooltip
                        classNames={{
                          base: "p-0 bg-transparent text-cyan-400 font-mono font-semibold items-start h-auto break-words whitespace-normal",
                          pre: "font-inherit text-inherit",
                          copyButton: "text-slate-500 hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity min-w-4 w-6 h-6 ml-1",
                        }}
                      >
                        {item.cmd}
                      </Snippet>
                      <div className="text-slate-300 text-xs leading-relaxed">
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
