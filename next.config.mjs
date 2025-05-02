/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/out',
    webpack: (config) => {
        // Disable minification
        config.optimization.minimize = false;
    
        return config;
      },
  
};

export default nextConfig;
