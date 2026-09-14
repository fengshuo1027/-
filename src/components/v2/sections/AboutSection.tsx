import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";

/** 07 About — 个人介绍与经历的结构占位。 */
export function AboutSection() {
  return (
    <V2Section
      id="about"
      index="07"
      eyebrow="About"
      title="About"
      description="关于我区块占位。后续接入个人自述、能力标签与工作经历。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-4">
          <V2Placeholder label="个人自述" note="后续：2-3 段自我介绍" />
          <V2Placeholder label="能力标签区" note="后续：技能关键词" />
        </div>

        <div className="flex flex-col gap-4">
          <V2Placeholder label="工作经历 01" note="后续：公司 / 职位 / 时间 / 职责" />
          <V2Placeholder label="工作经历 02" note="后续：公司 / 职位 / 时间 / 职责" />
        </div>
      </div>
    </V2Section>
  );
}
