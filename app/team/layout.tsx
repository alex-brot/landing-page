import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlexBrot | Team",
  description: "Unser Team",
}

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
