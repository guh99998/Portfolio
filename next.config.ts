import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // nao regerar AGENTS.md/CLAUDE.md a cada build
  agentRules: false,
};

export default nextConfig;
