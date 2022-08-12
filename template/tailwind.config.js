/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-main': 'var(--color-primary-main)',
                'primary-night': 'var(--color-primary-night)',
                'primary-purples-acai': 'var(--color-primary-purples-acai)',
                'neutral-medium-wave': 'var(--color-neutral-medium-wave)',
                'neutral-dark-city': 'var(--color-neutral-dark-city)',
                'neutral-dark-rooftop': 'var(--color-neutral-dark-rooftop)',
                'neutral-medium-cloud': 'var(--color-neutral-medium-cloud)'
            }
        }
    },
    plugins: [require('tailwind-scrollbar')]
};
