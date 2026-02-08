import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy/flow-club-companion",
        destination: "/privacy#flow-club-companion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
