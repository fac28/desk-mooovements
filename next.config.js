/** @type {import('next').NextConfig} */

nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'media.rightmove.co.uk', 'www.thebeijinger.com', 'lh5.googleusercontent.com', 'images.unsplash.com', 'media1.popsugar-assets.com', 'encrypted-tbn0.gstatic.com', 'media.istockphoto.com'],
  },
};


// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "fac-162bdad2",
    project: "desk-mooovment",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);


module.exports = nextConfig;