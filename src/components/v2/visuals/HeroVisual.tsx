/**
 * 01 Hero 的右侧大型主视觉 —— 抽象几何占位（第二版）。
 *
 * 这一版的目标是「主体物」，而不是「UI 面板」：
 * 取消外框、圆角与统一底色，让形体直接从黑色空间里浮现出来。
 *
 * 做法：
 *   主体板向左上受光、向右下沉入黑暗，上下都被画布裁切，
 *   因此它看起来比画布更大、像是被框住的一部分，而不是被装进一个卡片。
 *
 * 构图（由后到前）：
 *   1. 环境冷光 —— 低饱和青，落在主体左上方，只提供一点空气感
 *   2. 后层平面 —— 向右后方退去，被右缘裁切，制造纵深
 *   3. 主体板 —— 唯一的「实体」，带体积渐变与受光左缘
 *   4. 板内细节 —— 一条极弱竖向接缝 + 一段青色标记
 *   5. 水平辅助线 —— 一条极弱横线贯穿画布
 *   6. 底部渐隐 —— 让主体下缘沉入页面背景
 *   7. 占位标注
 *
 * 不含图像、光球、粒子、3D 或 WebGL；后续会整体替换为真正素材。
 */
export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[480px]">
      {/* 1. 环境冷光 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 -top-1/3 h-[110%] w-[105%] bg-[radial-gradient(circle_at_46%_46%,rgba(125,211,200,0.085),transparent_62%)]"
      />

      {/* 2. 后层平面 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[8%] -right-[12%] h-[118%] w-[76%] rotate-[5deg] bg-[linear-gradient(218deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.008)_42%,transparent_72%)]"
      />

      {/* 3. 主体板 + 4. 板内细节 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[10%] left-[20%] h-[120%] w-[62%] rotate-[-4deg] bg-[linear-gradient(197deg,#1c1e23_0%,#141519_34%,#0d0e11_66%,#08090b_100%)]"
      >
        {/* 受光左缘 */}
        <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.03)_46%,transparent_88%)]" />

        {/* 竖向接缝 */}
        <div className="absolute inset-y-0 left-[62%] w-px bg-white/[0.035]" />

        {/* 青色标记 */}
        <div className="absolute left-0 top-[32%] h-px w-12 bg-[linear-gradient(90deg,rgba(125,211,200,0.6),transparent)]" />
      </div>

      {/* 5. 水平辅助线 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[38%] h-px bg-white/[0.035]"
      />

      {/* 6. 底部渐隐 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent"
      />

      {/* 7. 占位标注 */}
      <p className="pointer-events-none absolute bottom-6 left-0 font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-600">
        主视觉占位
      </p>
    </div>
  );
}
