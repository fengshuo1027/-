"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ImageFallback } from "@/components/ImageFallback";
import type { Project } from "@/data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

type ProjectDetailProps = {
  project: Project;
  previous: Project;
  next: Project;
};

export function ProjectDetail({ project, previous, next }: ProjectDetailProps) {
  const infoItems = [
    { label: "项目类型", value: project.meta.type },
    { label: "我的角色", value: project.meta.role },
    { label: "设计内容", value: project.meta.scope },
    { label: "使用工具", value: project.meta.tools },
  ];

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-[#050505] px-5 py-10 text-white sm:px-8">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_8%,rgba(216,255,114,0.09),transparent_28rem),radial-gradient(circle_at_88%_12%,rgba(124,247,232,0.1),transparent_34rem),linear-gradient(180deg,#050505,#080808_48%,#050505)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#projects"
            className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.045] px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-[rgba(255,255,255,0.22)] hover:bg-[#7CF7E8]/[0.07] hover:text-white"
          >
            ← 返回项目列表
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.045] px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-[rgba(255,255,255,0.22)] hover:bg-[#D8FF72]/[0.07] hover:text-white"
          >
            返回首页
          </Link>
        </div>

        <motion.section
          className="grid gap-10 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <p className="text-sm font-medium uppercase text-[#9AF3EA]">
              Project Case
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-xl text-zinc-300">{project.subtitle}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(255,255,255,0.12)] bg-white/[0.045] px-4 py-2 text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-3 backdrop-blur-[12px]">
              <ImageFallback
                alt={project.title}
                label={project.title}
                className="h-[24rem] rounded-[1.55rem]"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="grid gap-4 md:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {infoItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="rounded-[1.25rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-5 backdrop-blur-[12px]"
            >
              <p className="text-sm text-[#9AF3EA]">{item.label}</p>
              <p className="mt-3 leading-7 text-zinc-300">{item.value}</p>
            </motion.div>
          ))}
        </motion.section>

        <section className="grid gap-8 py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-7 backdrop-blur-[12px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-sm font-medium uppercase text-[#D8FF72]">
              Background
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">项目背景</h2>
            <p className="mt-5 leading-8 text-zinc-300">{project.background}</p>
          </motion.div>

          <motion.div
            className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-7 backdrop-blur-[12px]"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-sm font-medium uppercase text-[#9AF3EA]">
              My Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">我的工作</h2>
            <ul className="mt-6 space-y-4">
              {project.work.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex gap-3 leading-7 text-zinc-300"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9AF3EA]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        <motion.section
          className="py-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase text-[#D8FF72]">
              Process
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">设计过程</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {project.process.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-6 backdrop-blur-[12px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.06]"
              >
                <span className="font-mono text-sm text-[#9AF3EA]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="py-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase text-[#9AF3EA]">
              Gallery
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">作品展示</h2>
          </div>
          <motion.div variants={fadeUp} className="mt-10">
            <ImageFallback
              alt={`${project.title} 大图`}
              label={project.title}
              className="h-[30rem] rounded-[2rem] border border-[rgba(255,255,255,0.12)]"
            />
          </motion.div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} variants={fadeUp}>
                <ImageFallback
                  alt={`${project.title} 作品图 ${item}`}
                  label={project.title}
                  className="h-64 rounded-[1.5rem] border border-[rgba(255,255,255,0.12)]"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[1, 2].map((item) => (
              <motion.div key={item} variants={fadeUp}>
                <ImageFallback
                  alt={`${project.title} 过程图 ${item}`}
                  label={project.title}
                  className="h-72 rounded-[1.5rem] border border-[rgba(255,255,255,0.12)]"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="grid gap-8 pb-20 lg:grid-cols-[1fr_1fr]">
          <motion.div
            className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.055] p-7 backdrop-blur-[12px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-sm font-medium uppercase text-[#D8FF72]">
              Summary
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">项目总结</h2>
            <p className="mt-5 leading-8 text-zinc-300">{project.summary}</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/projects/${previous.slug}`}
              className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.065]"
            >
              <p className="text-sm text-zinc-500">上一个项目</p>
              <p className="mt-3 font-semibold text-white">{previous.title}</p>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.22)] hover:bg-white/[0.065]"
            >
              <p className="text-sm text-zinc-500">下一个项目</p>
              <p className="mt-3 font-semibold text-white">{next.title}</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
