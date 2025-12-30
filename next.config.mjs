/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        "puppeteer-core": "puppeteer-core",
        "@sparticuz/chromium": "@sparticuz/chromium",
      });
    }
    return config;
  },
  turbopack: {
    resolveExtensions: [
      '.mdx',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
};

export default nextConfig;
