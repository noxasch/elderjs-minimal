const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      sass: true,
      scss: true,
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
  ],
};
