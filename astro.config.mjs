
 // @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Delta Positivo',

      logo: {
        src: './src/assets/delta-positivo-logo.png',
        alt: 'Logotipo Delta Positivo',
        replacesTitle: true,
      },

      customCss: ['./src/styles/global.css'],

      components: {
        Header: './src/components/CustomHeader.astro',
      },

      sidebar: [
        {
          label: 'Navegação',
          items: [
            { label: 'Página inicial', link: '/' },
          ],
        },
        {
          label: 'Áreas de conhecimento',
          items: [
            { label: 'Estruturas', slug: 'areas/estruturas' },
          ],
        },
      ],
    }),
  ],
});





