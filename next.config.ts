import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'js-snapcast.b-cdn.net', protocol: 'https' },
      { hostname: 'lh3.googleusercontent.com', protocol: 'https' },
    ]
  }
};

export default nextConfig;
