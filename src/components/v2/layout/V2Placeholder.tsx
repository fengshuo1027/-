import type { ReactNode } from "react";

type V2PlaceholderProps = {
  /** 占位区名称，例如 "主视觉区域" */
  label: string;
  /** 补充说明，用于标记后续要接入的内容 */
  note?: string;
  /** 高度相关的布局类，由调用方决定，例如 "aspect-[16/9]" */
  className?: string;
  children?: ReactNode;
};

/**
 * 结构骨架阶段的占位块。
 *
 * 使用虚线边框 + 中性深色，明确表达「这里是待填充区域」，
 * 避免与最终视觉设计混淆。
 */
export function V2Placeholder({
  label,
  note,
  className = "",
  children,
}: V2PlaceholderProps) {
  return (
    <div
      className={`flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/40 p-6 text-center ${className}`}
    >
      <span className="text-sm font-medium text-neutral-300">{label}</span>
      {note ? (
        <span className="text-xs text-neutral-500">{note}</span>
      ) : null}
      {children}
    </div>
  );
}
