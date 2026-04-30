export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  tags: string[];
  meta: {
    type: string;
    role: string;
    scope: string;
    tools: string;
  };
  background: string;
  work: string[];
  process: {
    title: string;
    description: string;
  }[];
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "education-product",
    title: "教育学习产品体验设计",
    subtitle: "K12 / UIUX / 学习路径",
    badge: "K12 / UIUX / 学习路径",
    description:
      "围绕 K12 学习场景，参与关卡、打卡、Notebook、挑战游戏与 iPad 适配。聚焦信息层级、组件状态和走查验收，让学习路径与操作反馈更清晰。",
    tags: ["Learning Path", "Design QA", "iPad UI"],
    meta: {
      type: "教育产品 / 移动端 / Pad 端",
      role: "UI 设计 / 体验梳理 / 设计验收",
      scope: "关卡选择、学习打卡、Notebook、挑战游戏、iPad 适配",
      tools: "Figma / Photoshop / Claude Code",
    },
    background:
      "项目围绕 K12 沉浸式学习场景展开，需要让学生在不同学习模块之间更清楚地理解进度、任务入口和操作反馈。",
    work: [
      "梳理关卡选择、学习打卡、Notebook 和挑战游戏的核心路径。",
      "参与关键页面视觉设计，统一按钮、卡片、弹窗和状态反馈。",
      "配合 iPad 端适配与 UI 走查，标注字号、间距、颜色和组件问题。",
    ],
    process: [
      {
        title: "问题发现",
        description: "先确认学习路径中容易迷失的入口、状态和反馈节点。",
      },
      {
        title: "信息结构",
        description: "重组进度、资产状态、模块入口和操作按钮的优先级。",
      },
      {
        title: "关键页面",
        description: "围绕关卡、打卡和内容回顾页面输出更清晰的 UI 方案。",
      },
      {
        title: "走查验收",
        description: "结合测试版本检查大屏适配、组件状态和异常反馈。",
      },
    ],
    summary:
      "这个项目让我更明确地理解：教育产品不只是信息展示，更重要的是让用户知道自己在哪里、下一步做什么，以及操作后发生了什么。",
  },
  {
    slug: "notebook",
    title: "Notebook 学习记录空间",
    subtitle: "Notebook / Lesson / Journal",
    badge: "Notebook / Lesson / Journal",
    description:
      "以 Lesson / Journal 为核心搭建学习记录页面。通过分类筛选、卡片结构和 Key Concept 反馈，帮助用户更快回顾内容与表现结果。",
    tags: ["Content System", "Key Concept", "Journal"],
    meta: {
      type: "学习记录 / 内容沉淀",
      role: "UI 探索 / 视觉迭代 / 信息层级",
      scope: "内容卡片、分类筛选、Key Concept、表现反馈",
      tools: "Figma / Photoshop",
    },
    background:
      "Notebook 承载学习后的内容沉淀，需要让用户快速找到 Lesson 与 Journal 记录，并理解自己的学习表现。",
    work: [
      "探索多版 Notebook 页面视觉与卡片组织方式。",
      "设计分类筛选、内容卡片和 Key Concept 信息呈现。",
      "围绕阅读效率、品牌氛围和反馈清晰度进行迭代。",
    ],
    process: [
      {
        title: "内容梳理",
        description: "区分 Lesson、Journal、Key Concept 和反馈信息的展示层级。",
      },
      {
        title: "卡片结构",
        description: "通过卡片组织内容，让学习记录更适合浏览和回看。",
      },
      {
        title: "视觉探索",
        description: "尝试不同氛围和阅读密度，寻找更稳定的学习记录空间。",
      },
    ],
    summary:
      "Notebook 的重点不是堆叠记录，而是帮助用户更轻松地回到学习现场，理解内容、表现和下一步方向。",
  },
  {
    slug: "mystery-box",
    title: "Mystery Box Challenge",
    subtitle: "Game UI / 互动流程 / 反馈机制",
    badge: "Game UI / 互动流程 / 反馈机制",
    description:
      "设计“猜物品”挑战游戏流程，覆盖线索提示、答案猜测、回合切换和结果反馈。重点强化游戏节奏、即时反馈和学习参与感。",
    tags: ["Game UI", "Feedback", "Challenge"],
    meta: {
      type: "Game UI / 学习挑战",
      role: "流程设计 / UI 设计 / 反馈机制",
      scope: "挑战流程、弹窗反馈、按钮状态、奖励结果页",
      tools: "Figma / Photoshop",
    },
    background:
      "项目希望把学习任务包装成更有参与感的挑战流程，让用户通过线索推理、描述和反馈完成学习目标。",
    work: [
      "梳理从进入挑战到结果总结的完整游戏流程。",
      "补齐线索、猜测、隐藏物品、玩家描述和回合切换状态。",
      "设计弹窗、Toast、按钮状态和奖励结果页等反馈细节。",
    ],
    process: [
      {
        title: "流程拆解",
        description: "明确每一轮挑战中的输入、反馈和状态变化。",
      },
      {
        title: "反馈机制",
        description: "让用户在猜测、匹配和选择后获得即时、清楚的回应。",
      },
      {
        title: "结果呈现",
        description: "通过评分和总结页面收束体验，强化完成感。",
      },
    ],
    summary:
      "这个项目让我更关注学习游戏中的节奏控制：每一次反馈都应该推动用户继续参与，而不是只完成一次操作。",
  },
  {
    slug: "ipad-adaptation",
    title: "iPad 端适配与 UI 走查",
    subtitle: "iPad / 适配 / 验收规范",
    badge: "iPad / 适配 / 验收规范",
    description:
      "参与 App 到 iPad 端的界面适配，覆盖注册、登录、设置、我的、首页等页面。重点走查字号、间距、组件状态、弹窗、表单和键盘适配。",
    tags: ["iPad UI", "Responsive", "QA"],
    meta: {
      type: "多端适配 / UI 走查",
      role: "iPad 适配 / UI 验收 / 问题标注",
      scope: "注册、登录、设置、我的、首页、表单和弹窗",
      tools: "Figma / Photoshop",
    },
    background:
      "移动端 App 迁移到 iPad 场景后，需要在保持流程和品牌一致的前提下，重新处理大屏空间、组件状态和输入体验。",
    work: [
      "参与注册、登录、设置、我的和首页等页面适配。",
      "对照设计稿与测试版本，标注视觉和交互问题。",
      "重点检查弹窗、表单、键盘、组件状态和页面布局。",
    ],
    process: [
      {
        title: "页面盘点",
        description: "先确认需要适配的核心流程与高频页面。",
      },
      {
        title: "大屏重构",
        description: "根据 iPad 操作场景调整布局、间距和内容密度。",
      },
      {
        title: "走查验收",
        description: "通过测试版本逐项检查视觉还原和异常状态。",
      },
    ],
    summary:
      "iPad 适配让我意识到，设计落地不止是画面比例变化，更是一次对组件、状态和真实使用场景的系统检查。",
  },
  {
    slug: "beike-redesign",
    title: "被窝整装业务体验改版",
    subtitle: "家装 App / 转化路径 / 品牌视觉",
    badge: "家装 App / 转化路径 / 品牌视觉",
    description:
      "参与家装 App 首页、案例详情页、留资路径和运营活动页改版。围绕从浏览灵感到发起咨询的路径，优化信息表达和行动引导。",
    tags: ["App Redesign", "Brand DNA", "Operation"],
    meta: {
      type: "家装业务 / App 改版 / 运营视觉",
      role: "UI 设计 / 运营视觉 / 品牌表达",
      scope: "首页、案例详情页、留资路径、H5 活动页、Banner",
      tools: "Figma / Photoshop / Illustrator / ComfyUI",
    },
    background:
      "家装用户决策链路较长，需要在浏览灵感、理解案例和发起咨询之间建立更清楚的信息承接与信任感。",
    work: [
      "参与首页、案例详情页、留资路径和运营页面改版。",
      "围绕品牌视觉 DNA 输出活动页、Banner 和投放视觉。",
      "优化从内容浏览到咨询转化的行动引导。",
    ],
    process: [
      {
        title: "路径梳理",
        description: "从浏览灵感到发起咨询，拆解用户决策中的关键节点。",
      },
      {
        title: "信息表达",
        description: "调整案例内容、服务信息和行动按钮之间的层级关系。",
      },
      {
        title: "品牌视觉",
        description: "延展品牌视觉 DNA，保持运营页面和核心产品体验一致。",
      },
    ],
    summary:
      "这个项目让我更关注商业转化场景中的设计分寸：视觉要建立信任，也要清楚地服务用户下一步行动。",
  },
  {
    slug: "ai-coding",
    title: "AI Coding 内容创作插件",
    subtitle: "AI Coding / Claude Code / 内容生产",
    badge: "AI Coding / Claude Code / 内容生产",
    description:
      "参与海外视频采集与内容创作插件设计，梳理链接输入、内容抓取、信息总结和脚本生成流程。用 Claude Code 辅助原型与验证。",
    tags: ["AI Workflow", "Prototype", "Content"],
    meta: {
      type: "AI 工具 / 内容生产 / 插件原型",
      role: "产品流程梳理 / 页面结构 / 原型验证",
      scope: "视频链接输入、内容抓取、信息总结、脚本生成",
      tools: "Claude Code / Figma / AIGC",
    },
    background:
      "海外内容创作需要快速处理视频素材、提炼信息并生成脚本初稿，适合通过 AI 工具降低重复整理成本。",
    work: [
      "梳理视频链接输入、内容抓取、总结和脚本生成链路。",
      "定义插件核心页面结构和关键交互状态。",
      "使用 Claude Code 辅助搭建原型并验证基础功能。",
    ],
    process: [
      {
        title: "流程定义",
        description: "明确从链接输入到脚本输出的核心任务链路。",
      },
      {
        title: "页面结构",
        description: "将复杂内容处理流程拆成更清楚的输入、分析和生成区域。",
      },
      {
        title: "原型验证",
        description: "借助 Claude Code 快速验证页面结构和交互逻辑。",
      },
    ],
    summary:
      "这个探索让我更确信，AI 辅助设计的价值在于快速验证工作流，而不是只停留在静态界面或单次生成。",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return { previous, next };
}
