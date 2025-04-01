/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['node-appwrite'],
    },
    // Add any routes using Appwrite to server runtime
    serverRuntimeConfig: {
      // API routes or server components that use AppWrite
    }
  };
  
  export default nextConfig;