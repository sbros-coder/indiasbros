/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // /blog-details?topic=website-development  ->  /blog-details/website-development
        source: "/blog-details",
        has: [{ type: "query", key: "topic", value: "(?<slug>.+)" }],
        destination: "/blog-details/:slug",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog-details/:slug",
        destination: "/blog-details?topic=:slug",
      },
    ];
  },
};

export default nextConfig;