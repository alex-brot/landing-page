import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AlexBrot | Datenschutz",
  description: "Datenschutz",
};

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
