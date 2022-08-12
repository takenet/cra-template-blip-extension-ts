import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin()]
    }
};
