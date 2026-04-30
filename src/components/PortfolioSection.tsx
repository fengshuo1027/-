"use client";

import { motion, type Variants } from "framer-motion";
import { ImageFallback } from "@/components/ImageFallback";

const portfolioItems = [
  {
    id: 1,
    title: "UI 设计作品集",
    description:
      "整理教育产品、界面体验和视觉表达相关项目，呈现从设计目标到页面组织的作品集内容。",
    cover: "/images/project-01-cover.png",
    file: "/portfolio/portfolio-ui.pdf",
  },
  {
    id: 2,
    title: "产品设计作品集",
    description:
      "围绕产品思考、功能结构和用户路径展开，展示 AI 工具与产品体验设计的案例沉淀。",
    cover: "/images/project-02-cover.png",
    file: "/portfolio/portfolio-product.pdf",
  },
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: "easeOut" },
  },
};

export function PortfolioSection() {
  return (
    <motion.section
      id="portfolio"
      className="scroll-mt-32 px-5 py-28 sm:px-8"
      variants={fadeUpItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase text-[#D8FF72]">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            我的作品集
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            展示我的设计项目、产品思考、视觉方案与完整案例沉淀。
          </p>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {portfolioItems.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeUpItem}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.06] p-4 shadow-2xl shadow-black/10 backdrop-blur-[12px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.075] hover:shadow-[#7CF7E8]/[0.07]"
            >
              <div className="overflow-hidden rounded-[1.15rem] border border-[rgba(255,255,255,0.12)]">
                <ImageFallback
                  src={item.cover}
                  alt={item.title}
                  label={item.title}
                  note="封面图待补充"
                  className="h-48 transition duration-500 group-hover:scale-[1.03]"
                  imageClassName="transition duration-500 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-1 flex-col p-2 pt-5">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400 transition group-hover:text-zinc-300">
                  {item.description}
                </p>
                <div className="mt-7">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D8FF72,#7CF7E8)] px-5 text-sm font-semibold text-[#050505] transition duration-300 hover:scale-[1.02]"
                  >
                    查看作品集
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
