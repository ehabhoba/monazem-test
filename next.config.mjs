/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // تحسينات الأداء
  experimental: {
    optimizeCss: true,
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // ضغط الصور
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  
  poweredByHeader: false,
  compress: true,

  // إعدادات الأمان
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
          },
        ],
      },
    ]
  },
  
  // إعادة توجيه للصفحات المفقودة
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/',
        permanent: false,
      },
    ]
  },

  webpack(config) {
    config.cache = false;
    return config;
  },
}

export default nextConfig
