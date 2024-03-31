import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register page",
  description: "Register page in NextJS app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-[680px] mx-auto flex flex-col">{children}</main>;
}
