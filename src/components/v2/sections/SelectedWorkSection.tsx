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
    title: "AI Image Evaluation",
    type: "AI / Evaluation System",
    year: "2026",
    description:
      "A system for evaluating AI-generated images against quality and consistency criteria.",
    role: "Product / Design / Build",
    category: "Work Project",
  },
  {
    id: "02",
    title: "AI Office Evaluation",
    type: "AI / Document Evaluation",
    year: "2026",
    description:
      "Evaluating AI output on office documents, from structure through to content fidelity.",
    role: "Product / Design / Build",
    category: "Work Project",
  },
  {
    id: "03",
    title: "ClipNote AI",
    type: "AI Product / Design / Build",
    year: "2026",
    description:
      "An AI-assisted clipping and note-taking product for collecting and reusing ideas.",
    role: "Product / Design / Build",
    category: "Product",
  },
  {
    id: "04",
    title: "Personal Workbench",
    type: "Product / AI-assisted Build",
    year: "2026",
    description:
      "A personal workspace for organizing tools, workflows and everyday systems.",
    role: "Product / Design / Build",
    category: "Personal Project",
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
      eyebrow="Selected Work"
      title="Selected Work"
      description="四个项目的占位数据，点击索引即可切换主视觉与项目信息。后续替换为真实项目内容与最终视觉。"
    >
      <SelectedWorkSwitcher items={workItems} />
    </V2Section>
  );
}
