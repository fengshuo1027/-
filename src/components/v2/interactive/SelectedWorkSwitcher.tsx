"use client";

import { useState } from "react";
import type { WorkItem } from "@/components/v2/sections/SelectedWorkSection";
import { WorkVisual } from "@/components/v2/visuals/WorkVisual";

type SelectedWorkSwitcherProps = {
  items: WorkItem[];
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-6 text-neutral-300">{value}</dd>
    </div>
  );
}

/**
 * 02 Selected Work 的基础交互版本。
 *
 * 只做基础状态切换：点击左侧索引 → 右侧主视觉与项目信息同步更新。
 *
 * 刻意不做的事（留给后续 Codex 阶段）：
 * framer-motion、GSAP、Sticky、自动轮播、滚动驱动、Fade 动画、
 * 页面跳转、真实项目图片。
 * 因此结构与文字都是瞬间切换 —— 这里没有任何动画。
 *
 * 布局：左侧索引约 25%，右侧内容约 75%；
 * 右侧自上而下为「项目信息头 → 主视觉 → 信息区」。
 */
export function SelectedWorkSwitcher({ items }: SelectedWorkSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active: WorkItem | undefined = items[activeIndex] ?? items[0];

  if (!active) {
    return null;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[25fr_75fr] lg:gap-12">
      {/* 左：项目索引 */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="项目索引"
        className="flex flex-col"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`work-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls="work-panel"
              onClick={() => setActiveIndex(index)}
              className={`group flex flex-col items-start gap-1.5 border-l py-4 pl-4 text-left transition ${
                isActive
                  ? "border-[rgba(125,211,200,0.7)]"
                  : "border-white/[0.08] hover:border-white/25"
              }`}
            >
              {/* 编号始终弱化，即使是选中项 */}
              <span
                className={`font-mono text-xs transition ${
                  isActive
                    ? "text-[rgba(125,211,200,0.6)]"
                    : "text-neutral-600"
                }`}
              >
                {item.id}
              </span>
              <span
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 group-hover:text-neutral-200"
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* 右：内容 */}
      <div
        id="work-panel"
        role="tabpanel"
        aria-labelledby={`work-tab-${active.id}`}
        className="flex min-w-0 flex-col"
      >
        {/* 项目信息头 */}
        <header>
          <span className="font-mono text-xs text-neutral-500">
            {active.id}
          </span>
          <h3 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
            {active.title}
          </h3>
          <div className="mt-4 flex flex-col gap-1 text-sm text-neutral-400">
            <p>{active.type}</p>
            <p>{active.year}</p>
          </div>
        </header>

        {/* 主视觉 —— 本区块最大的视觉焦点 */}
        <div className="mt-5">
          <WorkVisual index={activeIndex} />
        </div>

        {/* 信息区 */}
        <div className="mt-8 grid gap-8 border-t border-white/[0.08] pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">
              Description
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-neutral-300">
              {active.description}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
            <Field label="Role" value={active.role} />
            <Field label="Type" value={active.category} />
            <Field label="Year" value={active.year} />
          </dl>
        </div>
      </div>
    </div>
  );
}
