// 在你的项目中创建一个名为 'uppercase-loader.js' 的文件
module.exports = function(source) {
    // 转换为大写
    const upperCaseContent = source.toUpperCase();
    
    // 返回转换后的内容，这里不需要任何前后缀
    return upperCaseContent;
};

// webpack配置中指定如何使用这个loader
// webpack.config.js
module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.txt$/, // 匹配所有.txt文件
          use: [
            'raw-loader',
            path.resolve(__dirname, 'uppercase-loader.js'), // 使用刚才创建的loader
          ],
        },
      ],
    },
    // ...
  };



// 简单的webpack插件示例，它在每次构建完成后打印出一条消息
  // webpack-simple-plugin.js
const pluginName = 'SimpleWebpackPlugin';
 
class SimpleWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(pluginName, (stats) => {
      console.log('构建完成！');
    });
  }
}
 
module.exports = SimpleWebpackPlugin;


// 要在webpack配置中使用这个插件，你需要这样做
// webpack.config.js
const SimpleWebpackPlugin = require('./webpack-simple-plugin');
 
module.exports = {
  // ... 其他webpack配置
  plugins: [
    new SimpleWebpackPlugin()
  ]
};