"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { IconType } from "react-icons";
import {
  SiCanva,
  SiClaude,
  SiFigma,
  SiFlux,
  SiFramer,
  SiInvision,
  SiOpenai,
  SiSketch,
} from "react-icons/si";
import { ImageFallback } from "@/components/ImageFallback";
import { projects } from "@/data/projects";

const navItems = [
  { id: "nav-home", label: "首页", href: "#home" },
  { id: "nav-about", label: "关于我", href: "#about" },
  { id: "nav-projects", label: "项目经历", href: "#projects" },
  { id: "nav-portfolio", label: "作品集", href: "#portfolio" },
  { id: "nav-contact", label: "联系方式", href: "#contact" },
];

const techStack: {
  name: string;
  color: string;
  Icon: IconType;
}[] = [
  { name: "Figma", color: "#7CF7E8", Icon: SiFigma },
  { name: "Photoshop", color: "#5FE1D0", Icon: SiCanva },
  { name: "Illustrator", color: "#D8C27A", Icon: SiCanva },
  { name: "ComfyUI", color: "#D8FF72", Icon: SiOpenai },
  { name: "Claude Code", color: "#D8C27A", Icon: SiClaude },
  { name: "AIGC", color: "#7CF7E8", Icon: SiOpenai },
  { name: "Flux LoRA", color: "#D8FF72", Icon: SiFlux },
  { name: "UI Design", color: "#7CF7E8", Icon: SiFigma },
  { name: "UX Design", color: "#D8FF72", Icon: SiSketch },
  { name: "iPad Adaptation", color: "#5FE1D0", Icon: SiInvision },
  { name: "Design QA", color: "#D8C27A", Icon: SiFigma },
  { name: "Motion Design", color: "#7CF7E8", Icon: SiFramer },
  { name: "Operational Design", color: "#D8FF72", Icon: SiCanva },
];

const insights = [
  {
    title: "从界面美化到体验路径",
    content:
      "在教育产品设计中，我会先梳理用户从进入页面到完成任务的关键路径，再处理信息层级、反馈机制和视觉氛围。",
  },
  {
    title: "AI 不只是生成图片",
    content:
      "我更关注 AI 在真实工作流中的作用，例如辅助原型搭建、素材整理、脚本生成、视觉修复和内容分析。",
  },
  {
    title: "UI 走查是设计落地的一部分",
    content:
      "设计稿完成不代表体验完成。字号、间距、颜色、组件状态、弹窗、表单和适配检查都会影响最终体验质量。",
  },
];

const heroTags = [
  "教育产品体验设计",
  "移动端 / Pad 端 UI",
  "AI 辅助设计流程",
  "UI 走查与验收",
  "运营视觉设计",
];

const abilityTags = [
  "UI/UX 设计",
  "教育产品体验设计",
  "移动端 / Pad 端 UI",
  "信息层级梳理",
  "UI 走查与验收",
  "运营视觉设计",
  "AIGC 视觉探索",
  "Claude Code",
  "ComfyUI",
  "Figma / PS / AI",
];

const portfolioItems = [
  {
    id: 1,
    title: "个人网站设计作品集",
    description:
      "围绕个人品牌展示、视觉风格和项目展示进行设计，呈现从首页视觉到项目内容组织的完整思路。",
    category: "Web 设计",
    tags: ["Web Design", "Portfolio"],
    cover: "/portfolio/covers/personal-website-cover.jpg",
    file: "/portfolio/files/personal-website.pdf",
  },
  {
    id: 2,
    title: "AI 工具产品设计案例",
    description:
      "基于 AI 辅助内容生产流程进行插件产品设计探索，包含产品流程、功能结构和界面设计。",
    category: "AI 工具",
    tags: ["AI Tools", "Product Design"],
    cover: "/portfolio/covers/ai-tool-cover.jpg",
    file: "/portfolio/files/ai-tool.pdf",
  },
  {
    id: 3,
    title: "App 适配与 UI 走查案例",
    description:
      "围绕多端适配、视觉一致性和 UI 走查规则进行整理，展示设计规范落地过程。",
    category: "UI 设计",
    tags: ["UI Design", "App Design"],
    cover: "/portfolio/covers/app-ui-cover.jpg",
    file: "/portfolio/files/app-ui-case.pdf",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

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

function AnimatedSection({
  children,
  className,
  id,
  viewportAmount = 0.22,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  viewportAmount?: number;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
    >
      {children}
    </motion.section>
  );
}

function AmbientGlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[#D8FF72]/12 blur-3xl"
        animate={{ x: [0, 26, -10, 0], y: [0, 18, 36, 0], scale: [1, 1.08, 0.98, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12rem] top-48 h-[32rem] w-[32rem] rounded-full bg-[#5FE1D0]/14 blur-3xl"
        animate={{ x: [0, -28, 12, 0], y: [0, 34, -12, 0], scale: [1, 0.96, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-[42rem] h-[26rem] w-[26rem] rounded-full bg-white/[0.055] blur-3xl"
        animate={{ x: [0, 34, -20, 0], y: [0, -20, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-1/4 h-[30rem] w-[42rem] rounded-full bg-[#D8C27A]/10 blur-3xl"
        animate={{ x: [0, -24, 18, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,247,232,0.08),transparent_32rem),linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.92))]" />
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.045] px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-[rgba(255,255,255,0.22)] hover:bg-[#7CF7E8]/[0.07] hover:text-white sm:px-4 sm:py-2">
      {children}
    </span>
  );
}

function TechStackMarquee() {
  const marqueeItems = [...techStack, ...techStack];

  return (
    <AnimatedSection
      className="border-y border-[rgba(255,255,255,0.12)] bg-white/[0.025] py-9 backdrop-blur-[12px]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="tech-marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="tech-marquee-track flex items-center gap-4">
            {marqueeItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group flex min-w-max items-center gap-3 rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.06] px-5 py-3 text-zinc-500 backdrop-blur-[12px] transition duration-300 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.065] hover:text-[var(--brand-color)]"
                style={{ "--brand-color": tech.color } as CSSProperties}
              >
                <tech.Icon className="h-5 w-5 transition duration-300" />
                <span className="text-sm font-medium text-zinc-300 transition group-hover:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProfileHeroVisual() {
  return (
    <motion.div
      className="relative mt-12 w-full max-w-lg lg:mt-0"
      initial={{ opacity: 0, scale: 0.96, y: 22 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,rgba(216,255,114,0.22),rgba(124,247,232,0.16),transparent_70%)] blur-2xl"
        animate={{ scale: [1, 1.04, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-0 top-10 h-40 w-40 rounded-full border border-[rgba(255,255,255,0.14)]" />
      <div className="absolute -right-6 bottom-20 h-3 w-3 rounded-full bg-[#D8FF72]" />
      <div className="absolute left-6 top-16 h-2.5 w-2.5 rounded-full bg-[#9AF3EA]" />
      <div className="absolute bottom-8 left-16 h-1.5 w-1.5 rounded-full bg-white/60" />
      <motion.div
        className="group relative mx-auto overflow-hidden rounded-[2.25rem] border border-[rgba(255,255,255,0.16)] bg-white/[0.055] p-3 shadow-2xl shadow-black/30 backdrop-blur-[16px] transition duration-300 hover:scale-[1.01]"
        whileHover={{ scale: 1.01 }}
      >
        <div className="relative min-h-[35rem] overflow-hidden rounded-[1.85rem] border border-[rgba(255,255,255,0.12)]">
          <ImageFallback
            src="/profile.jpg"
            alt="冯硕个人形象"
            label="冯硕"
            note="个人形象待补充"
            className="absolute inset-0"
            imageClassName="transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/74 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.07] px-5 py-4 backdrop-blur-[12px]">
            <div>
              <p className="text-lg font-semibold text-white">冯硕</p>
              <p className="mt-1 text-xs text-zinc-400">UI Designer</p>
            </div>
            <span className="rounded-full bg-[linear-gradient(135deg,#D8FF72,#7CF7E8)] px-4 py-2 text-xs font-semibold text-[#050505]">
              Portfolio
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute -left-4 top-24 rounded-full border border-[rgba(255,255,255,0.16)] bg-[#7CF7E8]/[0.07] px-4 py-2 text-sm text-[#9AF3EA] backdrop-blur-[12px]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Learning Path
      </motion.div>
      <motion.div
        className="absolute -right-5 top-32 rounded-full border border-[rgba(255,255,255,0.16)] bg-[#D8FF72]/10 px-4 py-2 text-sm text-[#D8FF72] backdrop-blur-[12px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        Design QA
      </motion.div>
      <motion.div
        className="absolute -left-6 top-[58%] rounded-full border border-[rgba(255,255,255,0.16)] bg-[#7CF7E8]/[0.07] px-4 py-2 text-sm text-[#9AF3EA] backdrop-blur-[12px]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        AIGC Workflow
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="scroll-mt-28 pb-24 pt-28 sm:scroll-mt-32 sm:pb-28 sm:pt-36"
      viewportAmount={0.04}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase text-[#7CF7E8]">
            Selected Work
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            项目经历
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            这些项目来自工作与个人探索，覆盖教育学习产品、家装业务体验、运营视觉、AI Coding 工具和 AIGC 工作流。我更关注用户路径、信息层级和设计落地。
          </p>
        </div>
        <motion.div
          className="mt-10 grid w-full grid-cols-1 gap-6 sm:mt-14 sm:gap-7 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUpItem}
              className="group w-full min-w-0"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex h-auto w-full flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-4 backdrop-blur-[12px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.065] hover:shadow-2xl hover:shadow-[#7CF7E8]/[0.07] md:h-full"
              >
                <div className="overflow-hidden rounded-[1.15rem] border border-[rgba(255,255,255,0.12)]">
                  <ImageFallback
                    alt={project.title}
                    label={project.title}
                    className="h-40 w-full transition duration-500 group-hover:scale-[1.03] sm:h-44"
                  />
                </div>
                <div className="flex flex-1 flex-col p-2 pt-5">
                  <span className="inline-flex w-fit rounded-full border border-[rgba(255,255,255,0.14)] bg-[#7CF7E8]/[0.07] px-3 py-1 text-xs font-semibold text-[#9AF3EA]">
                    {project.badge}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-400 transition group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.035] px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex text-sm font-semibold text-[#9AF3EA] transition duration-300 group-hover:translate-x-1">
                    查看案例 →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function Portfolio() {
  return (
    <AnimatedSection id="portfolio" className="scroll-mt-32 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase text-[#D8FF72]">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            作品集 Portfolio
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
                  note={item.category}
                  className="h-48 transition duration-500 group-hover:scale-[1.03]"
                  imageClassName="transition duration-500 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-1 flex-col p-2 pt-5">
                <span className="inline-flex w-fit rounded-full border border-[rgba(216,255,114,0.22)] bg-[#D8FF72]/[0.08] px-3 py-1 text-xs font-semibold text-[#D8FF72]">
                  {item.category}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400 transition group-hover:text-zinc-300">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.035] px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D8FF72,#7CF7E8)] px-5 text-sm font-semibold text-[#050505] transition duration-300 hover:scale-[1.02]"
                  >
                    查看作品
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function Insights() {
  return (
    <AnimatedSection id="insights" className="scroll-mt-32 px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase text-[#D8FF72]">
            Thinking
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            设计洞察
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            我在项目中更关注设计如何被真实使用、如何降低理解成本，以及如何通过 AI 工具提升设计和内容生产效率。
          </p>
        </div>
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              variants={fadeUpItem}
              className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-6 backdrop-blur-[12px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.065] hover:shadow-2xl hover:shadow-[#D8FF72]/[0.07]"
            >
              <span className="font-mono text-sm text-[#7CF7E8]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {insight.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">{insight.content}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#050505] text-white"
      onMouseMove={(event) => {
        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        setMousePosition({
          x: ((clientX - left) / width) * 100,
          y: ((clientY - top) / height) * 100,
        });
      }}
      style={
        {
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        } as CSSProperties
      }
    >
      <AmbientGlowBackground />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(124,247,232,0.075),rgba(124,247,232,0.024)_18rem,transparent_38rem)] transition-[background] duration-300" />

      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.12)] bg-white/[0.045] backdrop-blur-[12px]">
        <nav className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-5 py-4 lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <a
            href="#home"
            className="justify-self-center text-lg font-semibold text-white transition hover:text-[#D8FF72] lg:justify-self-start"
          >
            冯硕
          </a>

          <div className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-[rgba(255,255,255,0.16)] bg-white/[0.06] p-1 shadow-2xl shadow-black/10 backdrop-blur-[12px] transition duration-300 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.075] lg:justify-self-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-zinc-300 transition duration-300 hover:bg-white/[0.09] hover:text-[#D8FF72] sm:px-4"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 lg:justify-self-end">
            <a
              href="/resume.pdf"
              download
              className="hidden rounded-full border border-[rgba(255,255,255,0.16)] bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-[12px] transition hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.07] hover:text-white sm:inline-flex"
            >
              下载简历
            </a>
            <a
              href="mailto:157357653@qq.com"
              className="rounded-full bg-[linear-gradient(135deg,#D8FF72,#7CF7E8)] px-5 py-2 text-sm font-semibold text-[#050505] transition duration-300 hover:scale-[1.02]"
            >
              联系我
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-5 py-24 text-center sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:text-left"
        >
          <div className="pointer-events-none absolute bottom-20 left-1/2 h-2 w-2 rounded-full bg-[#D8FF72]/80" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start"
          >
            <motion.p
              variants={fadeUpItem}
              className="text-sm font-medium uppercase text-[#D8FF72]"
            >
              UI Designer Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUpItem}
              className="mt-6 text-6xl font-semibold leading-none text-white sm:text-8xl lg:text-9xl"
            >
              冯硕
            </motion.h1>
            <motion.p
              variants={fadeUpItem}
              className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200"
            >
              UI Designer / AI-Driven Product Designer
            </motion.p>
            <motion.p
              variants={fadeUpItem}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
            >
              关注教育产品体验、AI 工具落地与视觉表达。擅长从用户路径、信息结构和业务目标出发，把复杂功能转化为清晰、可落地的界面体验。
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="mt-10 flex max-w-[21rem] flex-wrap justify-center gap-x-4 gap-y-4 sm:max-w-none sm:gap-3 lg:justify-start"
            >
              {heroTags.map((tag) => (
                <motion.span key={tag} variants={fadeUpItem}>
                  <Pill>{tag}</Pill>
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUpItem}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D8FF72,#7CF7E8)] px-7 text-sm font-semibold text-[#050505] shadow-2xl shadow-[#D8FF72]/10 transition duration-300 hover:scale-[1.02]"
              >
                查看项目
              </a>
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-full px-2 text-sm font-semibold text-white transition duration-300 hover:translate-x-1 hover:text-[#D8FF72]"
              >
                了解更多 →
              </a>
            </motion.div>
          </motion.div>

          <ProfileHeroVisual />
        </section>

        <TechStackMarquee />

        <Projects />

        <Portfolio />

        <Insights />

        <AnimatedSection id="about" className="scroll-mt-32 px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-6 backdrop-blur-[12px] sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-medium uppercase text-[#9AF3EA]">
                  About
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                  关于我
                </h2>
                <div className="mt-7 space-y-5 text-lg leading-8 text-zinc-300">
                  <p>
                    我是冯硕，视觉传达设计本科背景，目前方向是 UI/UX 设计。我的经历集中在教育学习产品、家装业务、运营视觉和 AI 工具探索。
                  </p>
                  <p>
                    在教育产品中，我参与关卡选择、学习打卡、Notebook、Mystery Box Challenge、iPad 适配与 UI 走查，更关注用户路径、信息层级和反馈机制。
                  </p>
                  <p>
                    我也在把 AI 工具接入设计流程，用 Claude Code 辅助原型搭建，用 ComfyUI、Flux LoRA 做视觉探索，让想法更快进入可验证的工具原型。
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {abilityTags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.065]">
                  <h3 className="text-xl font-semibold text-white">
                    Cosmo｜UI 设计师
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">2026.01 - 至今</p>
                  <p className="mt-4 leading-7 text-zinc-400">
                    负责教育学习产品移动端与 Pad 端 UI 设计，参与关卡、打卡、Notebook、挑战游戏、iPad 适配与 UI 走查等模块，重点处理学习路径、信息层级和反馈机制。
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.07]">
                  <h3 className="text-xl font-semibold text-white">
                    北京被窝装饰有限公司｜UI / 视觉设计师
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    2025.03 - 2025.11
                  </p>
                  <p className="mt-4 leading-7 text-zinc-400">
                    参与 App 首页、案例详情页、留资路径、运营活动页和品牌视觉设计，围绕家装用户决策路径优化信息表达、视觉氛围和转化引导。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="scroll-mt-32 px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-6 backdrop-blur-[12px] sm:p-8">
            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#7CF7E8]/[0.07] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 left-1/4 h-48 w-64 rounded-full bg-[#D8C27A]/[0.06] blur-3xl" />

              <div className="relative">
                <p className="text-sm font-medium uppercase text-[#9AF3EA]">
                  Let&apos;s Work Together
                </p>
                <h2 className="mt-3 text-4xl font-semibold text-white">
                  联系我
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  如果你正在寻找一名关注产品体验、AI 工具落地与视觉表达的 UI 设计师，欢迎联系我。
                </p>
              </div>

              <div className="relative flex flex-col gap-5 lg:items-end">
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {[
                    "邮箱：157357653@qq.com",
                    "电话：13343102298",
                    "城市：北京",
                    "方向：UI 设计师",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.045] px-4 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="mailto:157357653@qq.com"
                  className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#050505] transition duration-300 hover:bg-[#9AF3EA]"
                >
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-[rgba(255,255,255,0.12)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>冯硕的个人作品集</p>
          <p>UI 设计师｜教育产品体验设计｜AI 辅助设计探索</p>
        </div>
      </footer>
    </div>
  );
}
