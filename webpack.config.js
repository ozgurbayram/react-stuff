const path = require('path')
const webpack = require('webpack');

module.exports ={
    mode:'development',
    entry:path.join(__dirname,'./src/index.jsx'),
    output:{
        path:__dirname,
        filename:'app.js'
    },
  
    module:{
        rules:[
            {
                test:/\.jsx/,
                exclude:/node_modules/,
                use:'babel-loader',
            }
        ],
    },
        //...
    devServer: {
        contentBase: path.join(__dirname, './src'),
        compress: true,
        port: 8080,
        hot:true,
        inline:true
    },
}