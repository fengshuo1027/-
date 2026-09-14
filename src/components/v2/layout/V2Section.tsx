import type { ReactNode } from "react";

type V2SectionProps = {
  /** 锚点 id，用于页内跳转，例如 "work" → #work */
  id: string;
  /** 区块序号，例如 "01" */
  index: string;
  /** 眉标，例如 "Selected Work" */
  eyebrow: string;
  /** 区块主标题 */
  title: string;
  /** 区块说明，可选 */
  description?: string;
  children: ReactNode;
};

/**
 * V2 首页区块统一外壳。
 *
 * 结构骨架阶段只负责「间距 + 序号 + 标题层级」的一致性，
 * 不含任何最终视觉决策（配色、字体、动效）。
 */
export function V2Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: V2SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-neutral-800 px-5 py-20 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500">{index}</span>
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-neutral-100 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-neutral-400">
              {description}
            </p>
          ) : null}
        </header>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
