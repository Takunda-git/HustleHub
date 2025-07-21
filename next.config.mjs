/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  // Optimize for mobile and slow connections
  compress: true,
  poweredByHeader: false,
  // Enable static optimization
  trailingSlash: false,
  // Optimize bundle size
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
