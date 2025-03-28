/** @type {import('next').NextConfig} */
const nextConfig = {

   
    webpack: (config) => {
        // Disable minification
        config.optimization.minimize = false;
    
        return config;
      },
  
};

export default nextConfig;
