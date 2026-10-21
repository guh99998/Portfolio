import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // nao regerar AGENTS.md/CLAUDE.md a cada build
  agentRules: false,
  // paginas antigas: o site virou uma pagina so, e links ja indexados caem na home
  async redirects() {
    return ["/sites", "/glossario", "/aprendizado"].map(
      (source) => ({ source, destination: "/", permanent: true }),
    );
  },
};

export default nextConfig;
