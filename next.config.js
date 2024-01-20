/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
}; // Your current Next Config object

module.exports = withNextVideo(nextConfig);