import { CapabilityCarousel } from "@/components/v2/interactive/CapabilityCarousel";
import { V2Section } from "@/components/v2/layout/V2Section";

const capabilities = [
  {
    number: "01",
    title: "产品体验设计",
    description: "梳理场景、路径与关键体验。",
    details: {
      summary: "梳理用户场景与关键路径，让复杂任务变得清晰、顺畅。",
      related: ["用户路径", "交互方案", "体验优化"],
      tools: ["Figma", "原型", "AI"],
    },
  },
  {
    number: "02",
    title: "界面与视觉设计",
    description: "建立清晰、克制的视觉表达。",
    details: {
      summary: "用清晰的层级与视觉语言，帮助用户理解并完成任务。",
      related: ["界面设计", "视觉语言", "多端适配"],
      tools: ["Figma", "组件", "原型"],
    },
  },
  {
    number: "03",
    title: "设计系统与规范",
    description: "统一组件、状态与协作标准。",
    details: {
      summary: "建立可复用的界面规则与组件体系，提升产品一致性。",
      related: ["设计系统", "组件规范", "视觉一致性"],
      tools: ["Figma", "组件", "Code"],
    },
  },
  {
    number: "04",
    title: "AI 辅助设计流程",
    description: "让 AI 进入研究、设计与验证。",
    details: {
      summary: "把 AI 融入日常设计流程，辅助探索、制作与验证。",
      related: ["研究辅助", "方案探索", "工作流"],
      tools: ["AI", "Figma", "Code"],
    },
  },
  {
    number: "05",
    title: "走查与验收",
    description: "核对体验细节与多端一致性。",
    details: {
      summary: "关注交付前后的体验细节，减少偏差并持续改进。",
      related: ["UI 走查", "可用性", "多端一致性"],
      tools: ["Figma", "标注", "测试"],
    },
  },
  {
    number: "06",
    title: "运营视觉设计",
    description: "平衡品牌表达与业务目标。",
    details: {
      summary: "结合品牌表达与业务场景，形成准确、可落地的视觉方案。",
      related: ["活动视觉", "内容设计", "品牌表达"],
      tools: ["Figma", "视觉素材", "AI"],
    },
  },
];

/** 03 What I Do — 滚动驱动的 3D 能力环。 */
export function WhatIDoSection() {
  return (
    <V2Section
      id="what-i-do"
      index="03"
      eyebrow="我做什么"
      title="我做什么"
      description="从体验策略到设计落地的六项核心能力。"
    >
      <CapabilityCarousel items={capabilities} />
    </V2Section>
  );
}
