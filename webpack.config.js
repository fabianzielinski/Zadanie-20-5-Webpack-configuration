const path = require('path');

module.exports = (env) => {

    const environment = env || 'production';

    return {

        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.'+ environment +'.bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.css$/,
                    use: [{
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                               modules: true
                           }
                        }
                    ]
                }
            ]
        }
    }    
};
