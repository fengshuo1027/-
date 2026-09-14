import { V2Placeholder } from "@/components/v2/layout/V2Placeholder";
import { V2Section } from "@/components/v2/layout/V2Section";
import { projects } from "@/data/projects";

/**
 * 02 Selected Work — 三段式结构，为后续复杂切换交互预留位置。
 *
 * 当前为静态骨架：
 * - 项目导航区域：列出全部项目，暂不可切换
 * - 主视觉区域：占位
 * - 项目信息区域：占位
 */
export function SelectedWorkSection() {
  return (
    <V2Section
      id="work"
      index="02"
      eyebrow="Selected Work"
      title="Selected Work"
      description="项目展示区块占位。后续在此实现项目切换交互：导航选中 → 主视觉替换 → 信息区同步更新。"
    >
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* 项目导航区域 */}
        <nav aria-label="项目导航" className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            项目导航
          </p>
          <ul className="flex flex-col gap-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <button
                  type="button"
                  disabled
                  title="切换交互待实现"
                  className="w-full cursor-not-allowed rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-left"
                >
                  <span className="block text-sm font-medium text-neutral-200">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-xs text-neutral-500">
                    {project.subtitle}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 主视觉区域 + 项目信息区域 */}
        <div className="flex flex-col gap-6">
          <V2Placeholder
            label="主视觉区域"
            note="后续：当前选中项目的主图 / 关键界面"
            className="min-h-72"
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <V2Placeholder label="项目信息区域" note="后续：背景与目标" />
            <V2Placeholder label="项目信息区域" note="后续：我的角色与产出" />
            <V2Placeholder label="项目信息区域" note="后续：结果与沉淀" />
          </div>
        </div>
      </div>
    </V2Section>
  );
}
