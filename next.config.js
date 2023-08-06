/** @type {import('next').NextConfig} */
const fs = require('fs');

const dotenv = require('dotenv');

const env = dotenv.parse(fs.readFileSync('.env'));

const nextConfig = {
    reactStrictMode: true,
    env: env,
    images: {
        domains: ['i.scdn.co', 'lastfm.freetls.fastly.net', 'cdn.myanimelist.net']
    }
};

module.exports = nextConfig;
