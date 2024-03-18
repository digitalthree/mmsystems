/** @type {import('next').NextConfig} */
const { withNextVideo } = require('next-video/process');

const nextConfig = {
    images: {
        domains: [
            'wuaq56n9.dev.cdn.imgeng.in'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
}; // Your current Next Config object

module.exports = withNextVideo(nextConfig);