const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  images: {
    domains: [
      'http://localhost:3001/',
      'lh3.googleusercontent.com',
      'https://movie-quotes.ninadarbaidze.dev',
      'https://back.movie-quotes.ninadarbaidze.dev',
    ],
  },
};

module.exports = nextConfig;
