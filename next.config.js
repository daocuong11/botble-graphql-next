module.exports = {
  webpack(config, {dev, isServer}) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (dev) {
      config.module.rules.push({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    return config;
  },
};