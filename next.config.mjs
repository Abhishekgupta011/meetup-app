/** @type {import('next').NextConfig} */
// next.config.js

const nextConfig = {
    images: {
      // Specify remote patterns to allow loading images from specific domains
     // domains: ['media.cntraveler.com'],
      // Use remotePatterns instead of domains
      // Each pattern should be a regular expression matching the domains from which images should be loaded
      // In this case, we can use a simple pattern to match the specified domain
      remotePatterns: [
        // Regular expression to match the specified domain
        {
            // Specify the hostname in the pattern
            hostname: 'media.cntraveler.com',
          },
      ],
    },
  };
  
  export default nextConfig;
  