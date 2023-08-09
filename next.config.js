/** @type {import('next').NextConfig} */
const fs = require('fs');
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['i.scdn.co', 'lastfm.freetls.fastly.net', 'cdn.myanimelist.net']
    }
};

module.exports = nextConfig;
