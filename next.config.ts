import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // When using github codespaces, origin "supreme-engine-gjvpvv4v445fwrg-3000.app.github.dev" will replace "localhost:3000" so we need to allow both of them
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'supreme-engine-gjvpvv4v445fwrg-3000.app.github.dev',
      ],
    },
  },
};

export default nextConfig;
