import { SelectedWorkSwitcher } from "@/components/v2/interactive/SelectedWorkSwitcher";
import { V2Section } from "@/components/v2/layout/V2Section";

export type WorkItem = {
  /** 项目编号，同时用于锚点 id，例如 "01" */
  id: string;
  title: string;
  /** 头部次级 metadata：项目类型，例如 "AI / Evaluation System" */
  type: string;
  year: string;
  /** 信息区左栏：一句简短介绍 */
  description: string;
  /** 信息区右栏：我的角色 */
  role: string;
  /** 信息区右栏：项目性质，与头部的 type 不是同一个字段 */
  category: string;
};

/**
 * 四个项目的占位数据。
 *
 * 内容全部为临时占位，等真实项目整理完成后会整体替换
 * （届时更适合迁到 src/data/ 下）。
 */
const workItems: WorkItem[] = [
  {
    id: "01",
    title: "AI 图像评测",
    type: "AI / 评测系统",
    year: "2026",
    description:
      "用于依据质量与一致性标准评估 AI 生成图像的系统。",
    role: "产品 / 设计 / 构建",
    category: "工作项目",
  },
  {
    id: "02",
    title: "AI 办公产物评测",
    type: "AI / 文档评测",
    year: "2026",
    description:
      "评估 AI 生成的办公文档，从结构到内容还原度进行判断。",
    role: "产品 / 设计 / 构建",
    category: "工作项目",
  },
  {
    id: "03",
    title: "ClipNote AI",
    type: "AI 产品 / 设计 / 构建",
    year: "2026",
    description:
      "一款 AI 辅助剪藏与笔记产品，用于收集并复用灵感。",
    role: "产品 / 设计 / 构建",
    category: "产品",
  },
  {
    id: "04",
    title: "个人工作台",
    type: "产品 / AI 辅助构建",
    year: "2026",
    description:
      "用于整理工具、工作流与日常系统的个人工作空间。",
    role: "产品 / 设计 / 构建",
    category: "个人项目",
  },
];

/**
 * 02 Selected Work。
 *
 * 本组件保持为 Server Component：它只负责区块外壳与内容数据，
 * 交互状态下沉到 interactive/SelectedWorkSwitcher.tsx（客户端组件）。
 *
 * 结构：项目索引（左约 25%）→ 当前项目主视觉（右约 75%）→ 项目信息区。
 */
export function SelectedWorkSection() {
  return (
    <V2Section
      id="work"
      index="02"
      eyebrow="精选作品"
      title="精选作品"
      description="四个项目的占位数据，点击索引即可切换主视觉与项目信息。后续替换为真实项目内容与最终视觉。"
    >
      <SelectedWorkSwitcher items={workItems} />
    </V2Section>
  );
}
