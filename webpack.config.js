var debug = process.env.NODE_ENV !== "production";
// import Path from 'path';
module.exports = {

    devtool: debug?"sourcemap":null,

    entry: "./js/entry.js",

    output: {

        filename:"bundle.js"

    },
    module: {

        loaders: [
            {
                test: /\.css$/,//正则表达式，如果匹配到后缀为.css的文件使用style或者css加载器
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js|jsx$/,
                loader: "babel-loader", // Do not use "use" here
                exclude: /node_modules/,
                options: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }

        ]
    },
    plugins:debug?[]:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle:false,sourcemap:false})
    ],
    resolve: {

        alias: {

            'vue$': 'vue/dist/vue.js'

        }

    }

};