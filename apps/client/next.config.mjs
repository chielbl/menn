// const cspHeader = `
//     default-src 'self';
//     script-src 'self';
//     style-src 'self';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     block-all-mixed-content;
//     upgrade-insecure-requests;
// `;

import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/shared/env.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // These headers are set to improve the security of the application.
  async headers() {
    return [
      {
        source: '/(.*).(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*?)',
        headers: [
          // {
          //   key: 'Content-Security-Policy',
          //   value: cspHeader.replace(/\n/g, ''),
          // },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Add protection agianst MIME type sniffing
          { key: 'x-content-type-options', value: 'nosniff' },
          // The app should not be ran in an Iframe
          // This is also coverd by the CSP - frame-ancestors but should be kept for older browsers
          { key: 'X-Frame-Options', value: 'DENY' },
          // With this headers you can disable the use of browser features like the one listed below.
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), fullscreen=(self), geolocation=(), microphone=()',
          },
          // Referrer policy is used to determine how much information is on the referrer header with a request
          { key: 'referrer-policy', value: 'no-referrer' },
          // If a file is injected my malicious person and presented through a link the user gets the option
          // to open the file or download it. If the user selects 'open' then the html file will be executed by the browser
          // in context of the website. This means that the it can get to information like cookies.
          // This will prevent the option to open the file but will download it instead.
          { key: 'x-download-options', value: 'noopen' },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*', // Proxy to Backend
      },
    ];
  },
};
export default nextConfig;
