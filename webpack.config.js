const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                oneOf: [
                  // 匹配 <style module> 和 <style scoped>
                  { resourceQuery: /module/, use: ['style-loader', 'css-loader'] },
                  { resourceQuery: /scoped=true/, use: ['style-loader', 'css-loader'] },
                  // 匹配普通的 .css 文件
                  { use: ['style-loader', 'css-loader'] }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        compress: true,
        port: 9000,
        hot: true
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json']
    }
}; 