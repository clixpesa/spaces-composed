module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@native-base/icons': '@native-base/icons/lib',
            '@spaces/app': './app',
            '@spaces/blockchain': './blockchain',
            '@spaces/components': './components',
            '@spaces/features': './features',
            '@spaces/utils': './utils',
            '@spaces/test': './test',
          },
        },
      ],
    ],
  };
};
