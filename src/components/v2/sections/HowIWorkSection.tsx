import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";

const stages = [
  { index: "01", key: "discover", label: "Discover", note: "理解业务目标与用户场景" },
  { index: "02", key: "define", label: "Define", note: "收敛问题与设计目标" },
  { index: "03", key: "build", label: "Build", note: "产出方案与高保真界面" },
  { index: "04", key: "evaluate", label: "Evaluate", note: "走查、验收与可用性验证" },
  { index: "05", key: "iterate", label: "Iterate", note: "根据反馈持续迭代" },
];

/** 04 How I Work — 五个阶段的结构骨架，暂无 Sticky 效果。 */
export function HowIWorkSection() {
  return (
    <V2Section
      id="how-i-work"
      index="04"
      eyebrow="How I Work"
      title="How I Work"
      description="工作方法区块占位。后续在此呈现五个阶段的展开说明，可能接入滚动推进效果。"
    >
      <ol className="flex flex-col gap-4">
        {stages.map((stage) => (
          <li key={stage.key} className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex w-full items-center gap-4 sm:w-56 sm:shrink-0">
              <span className="font-mono text-sm text-neutral-500">
                {stage.index}
              </span>
              <span className="text-lg font-medium text-neutral-100">
                {stage.label}
              </span>
            </div>
            <V2Placeholder
              label={stage.note}
              note="该阶段的具体做法与产出待补充"
              className="min-h-24 w-full"
            />
          </li>
        ))}
      </ol>
    </V2Section>
  );
}
