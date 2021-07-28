module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'yarn start',
    },
    assert: {
      assertions: {
        'apple-touch-icon': 'off',
        'html-has-lang': 'off',
        'installable-manifest': 'off',
        'maskable-icon': 'off',
        'offline-start-url': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
        'works-offline': 'off',
        'unsized-images': 'off',
        'legacy-javascript': 'off',
      },
    },
  },
};
