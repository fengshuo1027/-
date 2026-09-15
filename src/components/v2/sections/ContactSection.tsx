import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";

const channels = [
  { key: "email", label: "邮箱" },
  { key: "phone", label: "电话" },
  { key: "city", label: "城市" },
  { key: "role", label: "求职方向" },
];

/** 08 Contact — 联系方式与结尾行动入口的结构占位。 */
export function ContactSection() {
  return (
    <V2Section
      id="contact"
      index="08"
      eyebrow="联系我"
      title="联系我"
      description="联系方式区块占位。后续接入联系渠道、结尾行动入口与页脚信息。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-4">
          <V2Placeholder label="结尾文案" note="后续：合作意向说明" />
          <V2Placeholder label="主要行动入口" note="后续：发送邮件 / 下载简历" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <V2Placeholder
              key={channel.key}
              label={channel.label}
              note="内容待补充"
            />
          ))}
        </div>
      </div>
    </V2Section>
  );
}
