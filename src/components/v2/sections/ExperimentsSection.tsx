import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";

const experiments = [
  { key: "aigc", label: "AIGC 视觉实验" },
  { key: "workflow", label: "AI 工作流实验" },
  { key: "prototype", label: "工具原型实验" },
];

/** 06 Experiments — 个人探索与实验内容的结构占位。 */
export function ExperimentsSection() {
  return (
    <V2Section
      id="experiments"
      index="06"
      eyebrow="实验项目"
      title="实验项目"
      description="个人实验区块占位。后续用于承载设计之外的探索：AIGC 视觉、AI 工作流与工具原型。"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {experiments.map((item) => (
          <div key={item.key} className="flex flex-col gap-4">
            <V2Placeholder
              label="实验主图"
              note="后续：实验成果视觉"
              className="min-h-48"
            />
            <V2Placeholder label={item.label} note="实验说明待补充" />
          </div>
        ))}
      </div>
    </V2Section>
  );
}
