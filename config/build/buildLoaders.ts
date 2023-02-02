import webpack from "webpack";

export function  buildLoaders(): webpack.RuleSetRule[] {
    // variables because the order in returned array matters
    // so in future we clearly can see the order

    // loads typescript 2.0+ like JavaScript
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typescriptLoader
    ]
}