import webpack from "webpack";

export function  buildLoaders(): webpack.RuleSetRule[] {
    // variables because the order in returned array matters
    // so in future we clearly can see the order

    // loads typescript 2.0+ like JavaScript
    // if we don't use ts - we need babel-loader
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };



    return [
        typescriptLoader, cssLoader
    ]
}