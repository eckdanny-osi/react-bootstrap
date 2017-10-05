
exports.modifyWebpackConfig = function modifyWebpackConfig({ config }) {
  config.loader('less-loader', {
    test: /\.less$/,
    loaders: ['style-loader', 'css-loader', 'less-loader'],
  });

  config.loader('raw-loader', {
    test: /src\/examples\//,
    loaders: ['raw-loader'],
  });
};


exports.onCreatePage = ({ page }) => {
  if (page.path.startsWith('/getting-started')) {
    page.layout = 'getting-started';
  } else if (page.path.startsWith('/components')) {
    page.layout = 'components';
  }
};