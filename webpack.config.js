const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 9000,
        hotOnly: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({filename: "index.html", template: "./public/index.html"}),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]]
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|pdf|svg)$/,
                exclude: /(node_modules)/,
                use: ["url-loader", "file-loader"]
            },
            {
                test: /\.svg$/,
                exclude: /(node_modules)/,
                use: ["@svgr/webpack"]
            }
        ]
    }
}