import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";

/** 01 Hero — 首屏定位与主视觉，后续接入最终排版。 */
export function HeroSection() {
  return (
    <V2Section
      id="hero"
      index="01"
      eyebrow="Hero"
      title="Hero"
      description="首屏区块占位。后续接入主标题、定位描述、行动入口与个人形象视觉。"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <V2Placeholder label="主标题" note="后续：姓名 / 定位一句话" />
          <V2Placeholder label="副标题与简介" note="后续：2-3 行自我介绍" />
          <div className="grid gap-4 sm:grid-cols-2">
            <V2Placeholder label="主 CTA" note="后续：查看项目" />
            <V2Placeholder label="次 CTA" note="后续：联系我" />
          </div>
        </div>

        <V2Placeholder
          label="主视觉区域"
          note="后续：个人形象或品牌视觉"
          className="min-h-64"
        />
      </div>
    </V2Section>
  );
}
