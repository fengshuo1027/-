/**
 * 02 Selected Work 的主视觉占位。
 *
 * 与 Hero 的占位视觉刻意区分：Hero 是「形体 + 光」的构图，
 * 这里是「结构语言」的抽象示意 —— 每个项目用不同的几何组织方式，
 * 暗示该项目未来的视觉类型，但不画任何真实 UI。
 *
 *   01 AI Image Evaluation → 网格 / 矩阵（图像评测结构）
 *   02 AI Office Evaluation → 页面 / 文本行（文档结构）
 *   03 ClipNote AI         → 框架 + 分栏（产品界面结构）
 *   04 Personal Workbench  → 大小不一的模块（工作台 / 模块系统）
 *
 * 全部为纯 CSS 细线与极弱填充：无图片、无依赖、无 WebGL、无 3D。
 * 切换项目时结构随之更换，用来验证将来替换真实视觉的机制。
 */

/** 01 —— 网格 / 图像评测矩阵 */
function GridStage() {
  const highlights: Record<number, string> = {
    9: "bg-white/[0.035]",
    18: "bg-[rgba(125,211,200,0.10)]",
    27: "bg-white/[0.03]",
    34: "bg-white/[0.03]",
  };

  return (
    <div className="absolute inset-[13%] grid grid-cols-8 grid-rows-5">
      {Array.from({ length: 40 }).map((_, index) => (
        <div
          key={index}
          className={`border-b border-r border-white/[0.06] ${highlights[index] ?? ""}`}
        />
      ))}
    </div>
  );
}

/** 02 —— 页面 / 文档结构 */
function DocumentStage() {
  const lines = [100, 78, 92, 58];

  return (
    <>
      {/* 后层页面 */}
      <div className="absolute bottom-[10%] left-[9%] top-[16%] w-[30%] border border-white/[0.05] bg-white/[0.012]" />

      {/* 主页面 */}
      <div className="absolute bottom-[14%] left-[21%] top-[10%] w-[32%] border border-white/[0.08] bg-white/[0.025]">
        <div className="flex flex-col gap-2.5 p-5">
          {[...lines, 84, 66, 40].map((width, index) => (
            <div
              key={index}
              className="h-px bg-white/[0.07]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>

      {/* 右侧次级页面 */}
      <div className="absolute bottom-[22%] left-[58%] top-[18%] w-[24%] border border-white/[0.05]">
        <div className="flex flex-col gap-2.5 p-4">
          {[96, 70, 88, 52].map((width, index) => (
            <div
              key={index}
              className="h-px bg-white/[0.055]"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/** 03 —— 框架 + 分栏（产品界面） */
function InterfaceStage() {
  return (
    <div className="absolute inset-[15%] border border-white/[0.08] bg-white/[0.02]">
      {/* 顶栏 */}
      <div className="h-9 border-b border-white/[0.06]" />

      <div className="flex h-[calc(100%-2.25rem)]">
        {/* 侧栏 */}
        <div className="w-1/4 border-r border-white/[0.06]">
          <div className="flex flex-col gap-2.5 p-4">
            <div className="h-px w-3/4 bg-white/[0.07]" />
            <div className="h-px w-1/2 bg-white/[0.05]" />
            <div className="h-px w-2/3 bg-white/[0.05]" />
          </div>
        </div>

        {/* 内容区 */}
        <div className="flex-1 p-5">
          <div className="h-px w-5/12 bg-white/[0.09]" />
          <div className="mt-5 grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`h-12 border border-white/[0.05] ${index === 1 ? "bg-[rgba(125,211,200,0.07)]" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** 04 —— 模块 / 工作台 */
function ModuleStage() {
  const modules = [
    { left: "8%", top: "14%", width: "30%", height: "40%" },
    { left: "42%", top: "10%", width: "22%", height: "26%" },
    { left: "68%", top: "22%", width: "24%", height: "46%" },
    { left: "14%", top: "60%", width: "26%", height: "28%" },
    { left: "46%", top: "44%", width: "18%", height: "44%" },
  ];

  return (
    <>
      {modules.map((module, index) => (
        <div
          key={index}
          className={`absolute border border-white/[0.07] bg-white/[0.02] ${
            index === 4 ? "border-[rgba(125,211,200,0.28)]" : ""
          }`}
          style={{
            left: module.left,
            top: module.top,
            width: module.width,
            height: module.height,
          }}
        />
      ))}
    </>
  );
}

const stages = [GridStage, DocumentStage, InterfaceStage, ModuleStage];
const captions = ["Grid", "Document", "Interface", "Modules"];

type WorkVisualProps = {
  /** 当前选中项目的下标，决定使用哪一套结构 */
  index: number;
};

export function WorkVisual({ index }: WorkVisualProps) {
  const slot = index % stages.length;
  const Stage = stages[slot];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      {/* 环境冷光 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 -top-1/3 h-[120%] w-[95%] bg-[radial-gradient(circle_at_45%_45%,rgba(125,211,200,0.06),transparent_62%)]"
      />

      {/* 结构示意 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Stage />
      </div>

      {/* 底部渐隐 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-neutral-950 to-transparent"
      />

      {/* 结构类型标注 */}
      <p className="pointer-events-none absolute bottom-5 left-0 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-700">
        {captions[slot]} — placeholder
      </p>
    </div>
  );
}
