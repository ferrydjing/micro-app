module.exports = {
    cacheId: `sw-cache-micro-app`,
    skipWaiting: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 10000000,
    exclude: ['/micro-app/index.html'],
    navigateFallback: '/micro-app/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
