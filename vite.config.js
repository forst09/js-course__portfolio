import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(() => {
    return {
        base: '',
        plugins: [
            ViteImageOptimizer({
                jpg: {
                    quality: 80
                },
                jpeg: {
                    quality: 80
                },
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