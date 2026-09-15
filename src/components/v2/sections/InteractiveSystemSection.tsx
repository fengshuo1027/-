import { SystemSwitcher } from "@/components/v2/interactive/SystemSwitcher";
import { V2Section } from "@/components/v2/layout/V2Section";

/**
 * 05 Interactive System — 重点区块，后续参考 Resolute 的 Companion 区域。
 *
 * 本组件保持为 Server Component，只负责区块外壳；
 * 交互逻辑下沉到 interactive/SystemSwitcher.tsx（客户端组件）。
 */
export function InteractiveSystemSection() {
  return (
    <V2Section
      id="system"
      index="05"
      eyebrow="能力系统"
      title="能力系统"
      description="交互系统区块占位。后续重点建设：五个入口 + 中央展示区的联动装置。"
    >
      <SystemSwitcher />
    </V2Section>
  );
}
