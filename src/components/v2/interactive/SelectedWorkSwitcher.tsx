"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
 * 02 Selected Work 的项目切换交互。
 *
 * 点击或通过键盘切换左侧索引时，右侧内容在同一场景内短暂淡出、
 * 更新并平滑进入；主视觉使用更明显但克制的轻微缩放。
 *
 * 布局：左侧索引约 25%，右侧内容约 75%；
 * 右侧自上而下为「项目信息头 → 主视觉 → 信息区」。
 */
export function SelectedWorkSwitcher({ items }: SelectedWorkSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active: WorkItem | undefined = items[activeIndex] ?? items[0];

  const activateItem = (index: number, moveFocus = false) => {
    const nextIndex = (index + items.length) % items.length;
    setActiveIndex(nextIndex);

    if (moveFocus) {
      document.getElementById(`work-tab-${items[nextIndex].id}`)?.focus();
    }
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const keyTargets: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    const nextIndex = keyTargets[event.key];

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    activateItem(nextIndex, true);
  };

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
              tabIndex={isActive ? 0 : -1}
              onClick={() => activateItem(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className="group relative flex flex-col items-start gap-1.5 border-l border-white/[0.08] py-4 pl-4 text-left transition-colors duration-200 hover:border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[rgba(125,211,200,0.55)] focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950 motion-reduce:transition-none"
            >
              {isActive ? (
                <motion.span
                  layoutId="selected-work-accent"
                  aria-hidden="true"
                  className="absolute -left-px inset-y-3 w-px bg-[rgb(125,211,200)] shadow-[0_0_14px_rgba(125,211,200,0.24)]"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
                  }
                />
              ) : null}

              {/* 编号始终弱化，即使是选中项 */}
              <span
                className={`font-mono text-xs transition-colors duration-200 motion-reduce:transition-none ${
                  isActive
                    ? "text-[rgba(125,211,200,0.6)]"
                    : "text-neutral-600"
                }`}
              >
                {item.id}
              </span>
              <span
                className={`text-sm font-medium transition-colors duration-200 motion-reduce:transition-none ${
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
      <div className="min-w-0">
        <p className="sr-only" aria-live="polite">
          已选择 {active.title}
        </p>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={active.id}
            id="work-panel"
            role="tabpanel"
            aria-labelledby={`work-tab-${active.id}`}
            className="flex min-w-0 flex-col"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 6, x: 2 }
            }
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 1, y: 0, x: 0 }
                : { opacity: 0, y: -4, x: -2 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
            }
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
            <motion.div
              className="mt-5"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0.72, scale: 0.992, y: 3 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0.58, scale: 1.006, y: -2 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.26, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <WorkVisual index={activeIndex} />
            </motion.div>

            {/* 信息区 */}
            <div className="mt-8 grid gap-8 border-t border-white/[0.08] pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">
                  项目简介
                </p>
                <p className="mt-2 max-w-md text-sm leading-6 text-neutral-300">
                  {active.description}
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                <Field label="角色" value={active.role} />
                <Field label="类型" value={active.category} />
                <Field label="年份" value={active.year} />
              </dl>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
