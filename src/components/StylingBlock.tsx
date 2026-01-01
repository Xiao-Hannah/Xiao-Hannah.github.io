import React from "react";
import constants from "../constants";
import { useWindowDimensions } from "../hooks/hooks";

interface PageDetails {
  gradient?: string;
}
const pages: Record<string, PageDetails> = {
  "/fridgeFriend": {
    gradient: "radial-gradient(circle at 80% 30%, rgba(74, 124, 78, 0.15) 0%, transparent 50%)"
  },
  "/bloome": {
    gradient: "radial-gradient(circle at 80% 30%, rgba(135, 40, 40, 0.15) 0%, transparent 50%)"
  },
  "/about": {
    gradient: "radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)"
  },
  "/": {
    gradient: "radial-gradient(circle at 70% 40%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)"
  },
};

export const StylingBlock = ({ locationPath }: { locationPath: string }) => {
  const { width } = useWindowDimensions();

  if (!Object.keys(pages).includes(locationPath)) return null;

  return (
    <div
      className="decorative-gradient"
      style={{
        position: "absolute",
        right: 0,
        width: Math.min(width * 0.6, 800),
        height: 600,
        background: pages[locationPath].gradient,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};
