/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/sitemap.xml.js',
        },
      ];
    },
  };
  
  export default nextConfig;
  