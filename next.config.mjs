/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          crypto: false, // Usamos false en lugar del polyfill
          stream: false,
          zlib: false,
          http: false,
          https: false,
          os: false,
          path: false,
        };
      }
      return config;
    },
    serverExternalPackages: ['@react-pdf/renderer'],
    // Solución alternativa para React 19:
    experimental: {
      esmExternals: 'loose'
    }
  };
  
  export default nextConfig;