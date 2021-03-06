const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    return {
        entry: [
            path.resolve(__dirname, 'src', 'index.js')
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.[name].js'
        },
        module: {
            rules: [{
                    test: /(\.jsx|\.js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(css|less)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader'
                    ]
                }//,
                // {
                //     test: /\.xml$/,
                //     use: [
                //         'xml-loader'
                //     ]
                // }
            ]
        },
        mode: 'development',
        devtool: 'eval',
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.[name].css',
                chunkFilename: '[id].css'
            })
        ]
    };
};