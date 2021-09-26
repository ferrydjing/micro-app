module.exports = {
    cacheId: `sw-cache-nancy-tool`,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 10000000,
    navigateFallback: '/index.html',
    navigateFallbackAllowlist: [/^(?!.*\.html$|\/data\/).*/]
};
