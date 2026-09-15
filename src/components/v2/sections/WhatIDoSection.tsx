import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";

const capabilities = [
  { key: "product", label: "产品体验设计" },
  { key: "interface", label: "界面与视觉设计" },
  { key: "system", label: "设计系统与规范" },
  { key: "ai", label: "AI 辅助设计流程" },
  { key: "qa", label: "走查与验收" },
  { key: "operation", label: "运营视觉设计" },
];

/** 03 What I Do — 能力范围与工具栈，内容待最终确定。 */
export function WhatIDoSection() {
  return (
    <V2Section
      id="what-i-do"
      index="03"
      eyebrow="我做什么"
      title="我做什么"
      description="能力范围区块占位。后续在此说明设计职能边界、协作方式与工具链。"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <V2Placeholder key={item.key} label={item.label} note="能力说明待补充" />
        ))}
      </div>

      <div className="mt-6">
        <V2Placeholder
          label="工具与方法槽位"
          note="后续：Figma / AIGC / 设计流程等标签区"
        />
      </div>
    </V2Section>
  );
}
