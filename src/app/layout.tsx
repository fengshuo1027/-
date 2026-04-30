import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "冯硕｜UI 设计师作品集",
  description:
    "冯硕的个人作品集，展示教育学习产品 UI/UX 设计、移动端与 iPad 端适配、AI 辅助设计流程、运营视觉和 UI 走查等项目经历。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
