import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function  buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // variables because the order in returned array matters
    // so in future we clearly can see the order

    // loads typescript 2.0+ like JavaScript
    // if we don't use ts - we need babel-loader
    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js|ts|tsx|jsx)$/,
            exclude: /node_modules/,
        use: {
        loader: "babel-loader",
            options: {
            presets: ['@babel/preset-env'],
            "plugins": [
                ["i18next-extract",
                    {
                        locales: ['en', 'zh'],
                        keyAsDefaultValue: true
                    }
                ],
            ]
        }
    }
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff2|woff)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => resPath.includes('.module.'),
                            localIdentName: isDev
                                ? '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]',
                        },
                    }
                },
                "sass-loader",
            ],
        };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}