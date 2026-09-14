import { AboutSection } from "@/components/v2/sections/AboutSection";
import { ContactSection } from "@/components/v2/sections/ContactSection";
import { ExperimentsSection } from "@/components/v2/sections/ExperimentsSection";
import { HeroSection } from "@/components/v2/sections/HeroSection";
import { HowIWorkSection } from "@/components/v2/sections/HowIWorkSection";
import { InteractiveSystemSection } from "@/components/v2/sections/InteractiveSystemSection";
import { SelectedWorkSection } from "@/components/v2/sections/SelectedWorkSection";
import { WhatIDoSection } from "@/components/v2/sections/WhatIDoSection";

/**
 * V2 首页骨架。
 *
 * 本文件只负责按顺序组合 8 个 Section，不含任何具体实现。
 * 每个 Section 的具体内容、交互与视觉都在各自组件内部演进。
 *
 * 说明：这是 Server Component（无 "use client"），
 * 只有真正需要交互的子组件（如 Interactive System）才下沉为客户端组件。
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <HeroSection />
      <SelectedWorkSection />
      <WhatIDoSection />
      <HowIWorkSection />
      <InteractiveSystemSection />
      <ExperimentsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
