"use client";

import { useState } from "react";

type SystemEntry = {
  id: string;
  label: string;
  summary: string;
  points: string[];
};

const entries: SystemEntry[] = [
  {
    id: "ai",
    label: "AI",
    summary: "AI 在设计与内容生产流程中的接入方式。",
    points: ["AI 辅助原型", "视觉探索流程", "内容生产链路"],
  },
  {
    id: "product",
    label: "Product",
    summary: "从业务目标到用户体验路径的产品侧思考。",
    points: ["用户路径梳理", "信息层级设计", "转化与反馈机制"],
  },
  {
    id: "evaluation",
    label: "Evaluation",
    summary: "设计落地后的走查、验收与质量判断标准。",
    points: ["UI 走查清单", "组件状态核对", "多端适配验收"],
  },
  {
    id: "design",
    label: "Design",
    summary: "界面与视觉表达层面的设计方法与产出。",
    points: ["视觉体系搭建", "界面细节打磨", "品牌与运营视觉"],
  },
  {
    id: "code",
    label: "Code",
    summary: "用工程手段把想法更快变成可验证的原型。",
    points: ["原型快速搭建", "组件化实现", "设计到代码的衔接"],
  },
];

/**
 * 05 Interactive System 的交互核心。
 *
 * 当前只实现最基础的点击切换：左侧五个入口 → 右侧中央展示区同步更新。
 * 不含最终动画、光球、环形布局或任何复杂视觉。
 */
export function SystemSwitcher() {
  const [activeId, setActiveId] = useState<string>(entries[0].id);
  const active = entries.find((entry) => entry.id === activeId) ?? entries[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <div
        role="tablist"
        aria-label="Interactive System 入口"
        aria-orientation="vertical"
        className="flex flex-col gap-2"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          入口
        </p>
        {entries.map((entry) => {
          const isActive = entry.id === activeId;

          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              id={`system-tab-${entry.id}`}
              aria-selected={isActive}
              aria-controls={`system-panel-${entry.id}`}
              onClick={() => setActiveId(entry.id)}
              className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${
                isActive
                  ? "border-neutral-500 bg-neutral-800 text-neutral-50"
                  : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
              }`}
            >
              {entry.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`system-panel-${active.id}`}
        aria-labelledby={`system-tab-${active.id}`}
        className="flex min-h-80 flex-col justify-center rounded-xl border border-dashed border-neutral-700 bg-neutral-900/40 p-8"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          中央内容展示区域
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-neutral-100">
          {active.label}
        </h3>
        <p className="mt-3 max-w-xl leading-7 text-neutral-400">
          {active.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {active.points.map((point) => (
            <li
              key={point}
              className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-400"
            >
              {point}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-neutral-600">
          后续：接入环形布局、内容换字动画与最终视觉。
        </p>
      </div>
    </div>
  );
}
