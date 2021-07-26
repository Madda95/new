const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"], extensions: ['', '.js', '.jsx'] },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            { 
                test: /\.(js|jsx|)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(scss|css)$/, 
                use: ["style-loader", "css-loader","sass-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            favicon: "src/assets/favico.png",
        }),
        new RobotstxtPlugin({
            filePath: "src/robot.txt",
        }),
    ],
};