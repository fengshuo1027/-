import { CapabilityArc } from "@/components/v2/interactive/CapabilityArc";
import { V2Section } from "@/components/v2/layout/V2Section";

const capabilities = [
  {
    number: "01",
    title: "产品体验设计",
    description: "梳理场景、路径与关键体验。",
  },
  {
    number: "02",
    title: "界面与视觉设计",
    description: "建立清晰、克制的视觉表达。",
  },
  {
    number: "03",
    title: "设计系统与规范",
    description: "统一组件、状态与协作标准。",
  },
  {
    number: "04",
    title: "AI 辅助设计流程",
    description: "让 AI 进入研究、设计与验证。",
  },
  {
    number: "05",
    title: "走查与验收",
    description: "核对体验细节与多端一致性。",
  },
  {
    number: "06",
    title: "运营视觉设计",
    description: "平衡品牌表达与业务目标。",
  },
];

/** 03 What I Do — 滚动驱动的能力圆弧。 */
export function WhatIDoSection() {
  return (
    <V2Section
      id="what-i-do"
      index="03"
      eyebrow="我做什么"
      title="我做什么"
      description="从体验策略到设计落地的六项核心能力。"
    >
      <CapabilityArc items={capabilities} />
    </V2Section>
  );
}
