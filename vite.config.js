import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(() => {
    return {
        base: './',
        plugins: [
            ViteImageOptimizer({
                jpg: {
                    quality: 80
                },
                jpeg: {
                    quality: 80
                },
                svg: {
                    multipass: true,
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeHiddenElems: false, // don't remove invisible elements
                                    removeUselessDefs: false, // don't remove unused symbols
                                    cleanupIds: false // don't remove symbol ids
                                }
                            }
                        },
                    ],
                }

            }),
            handlebars({
                partialDirectory: resolve(__dirname, 'src/layout'),
                reloadOnPartialChange: true,
            }),
            legacy({
                targets: ['defaults', 'not IE 11'],
            }),
        ],
        css: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    sortMediaQueries({
                        sort: 'desktop-first'
                    })
                ]
            }
        }
    };
});