import { HeroVisual } from "@/components/v2/visuals/HeroVisual";

/**
 * 01 Hero — 首屏。
 *
 * 结构：桌面端左文右图（45 / 55），移动端文字在上、视觉在下。
 *
 * 本轮目标只是把首屏的构图定下来：
 * 尺寸、比例、位置、明暗关系。因此——
 * - 不使用 V2Section 外壳（Hero 不需要「01 / Hero」式的区块标题，
 *   标题层级直接从 h1 开始）
 * - 不含任何动画，不使用 framer-motion
 * - 视觉为抽象几何占位，见 visuals/HeroVisual.tsx
 *
 * 精修要点：
 * - CTA 全部去掉了白底大按钮；主按钮为深色实体 + 极细边框，次按钮为纯文字
 * - h1 字重 medium、行高 0.9，并通过 --font-display 预留 Display 字体槽位
 *
 * 平滑滚动由 layout.tsx 中 <html> 上已有的 scroll-smooth 提供，
 * 因此两个 CTA 用普通锚点即可，无需客户端组件。
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-neutral-950 px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* 极弱的冷色光感，只负责给左上的文字区一点空气感 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_75%_at_72%_-8%,rgba(125,211,200,0.055),transparent_62%)]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-stretch gap-14 lg:min-h-[64svh] lg:grid-cols-[45fr_55fr] lg:gap-16">
        {/* 左：文字 */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium tracking-wide text-neutral-400">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[rgba(125,211,200,0.7)]"
            />
            Selected Work 2026
          </span>

          {/*
            字重由 semibold 降到 medium，行高收到 0.9 —— 让三行更像一整块
            「编辑体标题」，而不是三个独立的行。

            fontFamily 指向 --font-display：该变量目前未定义，会回落到继承字体，
            因此现在不改变任何渲染结果。等后续接入 Display / Serif 字体时，
            只需在 globals.css 中定义 --font-display，这里无需再改。

            注意：换字体后需重新确认 leading-[0.9] —— 不同字体的下伸部深度不同。
          */}
          <h1
            className="mt-8 text-[2.5rem] font-medium leading-[0.9] tracking-[-0.02em] text-white sm:text-6xl xl:text-7xl 2xl:text-8xl"
            style={{ fontFamily: "var(--font-display, inherit)" }}
          >
            <span className="block">AI designer</span>
            <span className="block">building</span>
            <span className="block">systems</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
            Designing AI products, evaluation systems, and workflows that turn
            ideas into usable tools.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            {/* 主 CTA：深色实体 + 极细边框 + 白字，hover 只做轻微提亮 */}
            <a
              href="#work"
              className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/[0.14] bg-[#16181b] px-6 text-sm font-medium text-white transition hover:border-white/[0.22] hover:bg-[#1c1e22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:w-auto"
            >
              View projects
            </a>
            {/* 次 CTA：无填充、无边框的纯文字按钮 */}
            <a
              href="#about"
              className="inline-flex h-11 w-full items-center justify-center px-2 text-sm font-medium text-neutral-400 transition hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:w-auto"
            >
              About me
            </a>
          </div>
        </div>

        {/* 右：主视觉占位 */}
        <HeroVisual />
      </div>
    </section>
  );
}
