module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
                .tap(options => {
                    const ret = options || {};
                        ret.pngquant = {
                            quality: '65-90',
                            speed: 4
                        };
                        ret.mozjpeg = {
                            progressive: true,
                            quality: 35,
                        };
                        ret.optipng = {
                            optimizationLevel: 5,
                        };
                        return ret;
                });
    },
};
