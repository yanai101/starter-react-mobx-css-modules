const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// paths
const projectPath = path.resolve(__dirname, '..');
const buildPath = path.join(projectPath, 'build');
const srcPath = path.join(projectPath, 'src');
const appPath = path.join(srcPath, 'app');

const config = {
    entry: path.join(appPath, 'index.jsx'),
    output: {
        filename: 'bundle.js',
        path: buildPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                include: projectPath,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,   // make sure sass-loader is used on imported assets
                            localIdentName: '[local]---[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                include: projectPath,
                loader: 'url-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(appPath, 'index.html')
        })
    ],
    devServer: {
        contentBase: buildPath
    },
    devtool: 'source-map'
};

module.exports = config;