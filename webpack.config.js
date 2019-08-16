const path = require('path');
const HtmlWebpckPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
console.log(process.env.NODE_ENV);
module.exports =function(env, argv){
    console.log(env)
    console.log(argv)
    return {
        devtool: 'inline-source-map',
        entry:'./src/index.tsx',
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname,'dist')
        },
        plugins:[
            //index模板
            new HtmlWebpckPlugin({
                template: './public/index.html',
                hash: true,
            }),
            new ExtractTextWebpackPlugin({filename:'[name].[chunkhash].css',disable:argv.mode === 'production'?true:false}),
            new webpack.HotModuleReplacementPlugin('/src')
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        module:{
            rules:[
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
                {
                    test: /\.scss$/,     // 解析scss
                    use: ExtractTextWebpackPlugin.extract({
                        // 将css用link的方式引入就不再需要style-loader了
                        fallback: "style-loader",
                        use: ['css-loader','postcss-loader', 'sass-loader'] // 从右向左解析
                    })
                },
                {
                    test:/\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: "style-loader",
                        use: ['css-loader','postcss-loader']
                    })
                },
                {
                    test:/\.(jpg|gif|png|)$/,
                    use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit:8192,
                                outputPath:'img',
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|svg)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(html|htm)/,
                    use:'html-withimg-loader'
                }
            ]
        },
        devServer: {
            port: 3000,             // 端口
            open: true,             // 自动打开浏览器
            hot: true,               // 开启热更新
            overlay: true, // 浏览器页面上显示错误
            historyApiFallback: true
        },
    };
}
