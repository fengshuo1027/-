"use client";

import { motion, type Variants } from "framer-motion";
import { ImageFallback } from "@/components/ImageFallback";
import type { ProjectSection } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" },
  },
};

type ProjectSectionsEditorProps = {
  initialSections: ProjectSection[];
};

export function ProjectSectionsEditor({
  initialSections,
}: ProjectSectionsEditorProps) {
  if (initialSections.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase text-[#9AF3EA]">
            Showcase
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">项目展示</h2>
          <p className="mt-5 leading-8 text-zinc-400">
            按模块整理 APP 界面、WEB 界面与项目过程图，集中展示关键页面和设计落地效果。
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        {initialSections.map((section) => {
          const sectionItems =
            section.items ??
            section.images?.map((image) => ({
              title: image.title,
              image: image.src,
              fit: image.fit,
              layout: image.layout,
            })) ??
            [];
          const appItems = sectionItems.filter((item) => item.layout === "app");
          const defaultItems = sectionItems.filter(
            (item) => item.layout !== "app",
          );

          return (
            <motion.div
              key={section.key ?? section.title}
              variants={fadeUp}
              className="rounded-[1.75rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-5 backdrop-blur-[12px] sm:p-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                {section.title}
              </h3>

              {sectionItems.length === 0 ? (
                <div className="mt-6 rounded-[1.25rem] border border-dashed border-[rgba(255,255,255,0.14)] bg-white/[0.025] p-8 text-center text-zinc-500">
                  暂无展示内容
                </div>
              ) : (
                <div className="mt-6 space-y-5">
                  {appItems.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {appItems.map((item) => (
                        <article
                          key={item.image}
                          className="group overflow-hidden rounded-[1.35rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.04] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-[rgba(124,247,232,0.32)] hover:bg-[#7CF7E8]/[0.06]"
                        >
                          <ImageFallback
                            src={item.image}
                            alt={item.title}
                            label={item.title}
                            note="图片待补充"
                            className="aspect-[9/16] w-full bg-transparent"
                            imageClassName="bg-transparent transition duration-500 ease-out group-hover:scale-[1.03]"
                            objectFit={item.fit ?? "contain"}
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-white transition duration-300 group-hover:text-[#9AF3EA]">
                              {item.title}
                            </h4>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : null}

                  {defaultItems.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      {defaultItems.map((item) => (
                        <article
                          key={item.image}
                          className="group overflow-hidden rounded-[1.35rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.04] transition duration-300 ease-out hover:-translate-y-1.5 hover:border-[rgba(124,247,232,0.32)] hover:bg-[#7CF7E8]/[0.06]"
                        >
                          <ImageFallback
                            src={item.image}
                            alt={item.title}
                            label={item.title}
                            note="图片待补充"
                            className="aspect-[16/10] w-full bg-transparent"
                            imageClassName="bg-transparent transition duration-500 ease-out group-hover:scale-[1.03]"
                            objectFit={item.fit ?? "contain"}
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-white transition duration-300 group-hover:text-[#9AF3EA]">
                              {item.title}
                            </h4>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
