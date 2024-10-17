import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AlexBrot | Impressum",
  description: "Impressum",
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
