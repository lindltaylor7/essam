/** @type {import('next').NextConfig} */
const nextConfig = {
    // Habilita polyfills para módulos de Node.js
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          zlib: require.resolve("browserify-zlib"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          path: require.resolve("path-browserify"),
        };
      }
      return config;
    },
    // Opcional: Si usas `@react-pdf/renderer` solo en el cliente
    serverExternalPackages: ['@react-pdf/renderer'],
  };
  
  export default nextConfig;