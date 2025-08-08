import { join } from 'node:path';

const outputDir = '_dist';
const imagesFolder = 'images';

export const lines = {
  'newsletter_01': {

    path: join(outputDir, 'newsletter_01'),
    imagesFolder,

    header: {
      title:'newsletter DSM',
      nr: 'nr 1',
      date: '8 maj 2025',
      heroImg: 'hero-image.png',
    },

    news: {
      headline: 'News Headline',
      items: [
        {
          author: 'Janowski, Piotr, (mBank/DSM)',
          title: '100 mln marży FX',
        },
        {
          author: 'Janowski, Piotr, (mBank/DSM)',
          title: '200 tys. transakcji walutowych z klintami K1, K2, K3',
        },
        {
          author: 'Janowski, Piotr, (mBank/DSM)',
          title: 'Ponad 7 tysięcy klientów aktywnych',
        },
      ],
      more: {
        text: 'chcesz wiedzieć więcej o DSM?',
        cta: 'czytaj dalej'
      }
    },

    top: {
      headline: 'Top Headline',
      items: [
        {
          icon: 'icon_1.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_2.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_3.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_4.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_5.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        }
      ],
    },

    results: {
      headline: 'Results Headline',
      items: [
        {
          title: 'K1',
          subtitle: 'wynik w K1:',
          desc: 'marża Q1, aktywni klienci, (wizualizacja produktów 3 podstawowe. spot, pochodne, depo)',
        },
        {
          title: 'K2',
          subtitle: 'wynik w K2:',
          desc: 'marża Q1, aktywni klienci, (wizualizacja produktów 3 podstawowe. spot, pochodne, depo)',
        },
        {
          title: 'K3',
          subtitle: 'wynik w K3:',
          desc: 'marża Q1, aktywni klienci, (wizualizacja produktów 3 podstawowe. spot, pochodne, depo)',
        },
      ],
      more: {
        text: 'chcesz wiedzieć więcej o DSM?',
        cta: 'czytaj dalej'
      }
    },

    events: {
      headline: 'Key Events Headline',
      items: [
        [{
            img: 'img_1.png',
            title: 'W styczniu wdrożyliśmy...',
            author: 'Michał Garski (mBank/DSM)',
          },
          {
            img: 'img_2.png',
            title: '100 mln marży FX',
            author: 'Michał Garski (mBank/DSM)',
          }
        ],
        [{
          img: 'img_3.png',
          title: '200 tys. transakcji walutowych z klintami K1, K2, K3',
          author: 'Piotr Janowski (mBank/DSM)',
          },
          {
            img: 'img_4.png',
            title: '200 tys. transakcji walutowych z klintami K1, K2, K3',
            author: 'Piotr Janowski (mBank/DSM)',
          },
        ],
        [{
          img: 'img_5.png',
          title: 'Ponad 7 tysięcy klientów aktywnych',
          author: 'Piotr Janowski (mBank/DSM)',
          },
          {
            img: 'img_6.png',
            title: 'Ponad 7 tysięcy klientów aktywnych',
            author: 'Piotr Janowski (mBank/DSM)',
          }
        ],
      ],
    },

    jobs: {
      items: [
        {
          title: 'specjalista ds. sprzedaży instrumentów pochodnych',
          url: '#',
        },
                {
          title: 'dealer transakcji pochodnych',
          url: '#',
        },
                {
          title: 'dealer transakcji spot',
          url: '#',
        },
                {
          title: 'dealer transakcji spot',
          url: '#',
        },
      ],
    },
  },

  'newsletter_02': {

    path: join(outputDir, 'newsletter_02'),
    imagesFolder,

    header: {
      title:'newsletter DSM',
      nr: 'nr 2',
      date: '15 maj 2025',
      heroImg: 'hero-image.png',
    },

    news: {
      headline: 'News Headline',
      items: [
        {
          author: 'Janowski, Piotr, (mBank/DSM)',
          title: '100 mln marży FX',
        },
        {
          author: 'Janowski, Piotr, (mBank/DSM)',
          title: '200 tys. transakcji walutowych z klintami K1, K2, K3',
        },
        {
          author: 'Janowski, Piotr, (mBank/DSM)',
          title: 'Ponad 7 tysięcy klientów aktywnych',
        },
      ],
      more: {
        text: 'chcesz wiedzieć więcej o DSM?',
        cta: 'czytaj dalej'
      }
    },

    top: {
      headline: 'Top Headline',
      items: [
        {
          icon: 'icon_1.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_2.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_3.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_4.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        },
        {
          icon: 'icon_5.png',
          title: 'top spot',
          author: 'Janowski, Piotr, (mBank/DSM)',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com.',
        }
      ],
    },

    results: {
      headline: 'Results Headline',
      items: [
        {
          title: 'K1',
          subtitle: 'wynik w K1:',
          desc: 'marża Q1, aktywni klienci, (wizualizacja produktów 3 podstawowe. spot, pochodne, depo)',
        },
        {
          title: 'K2',
          subtitle: 'wynik w K2:',
          desc: 'marża Q1, aktywni klienci, (wizualizacja produktów 3 podstawowe. spot, pochodne, depo)',
        },
        {
          title: 'K3',
          subtitle: 'wynik w K3:',
          desc: 'marża Q1, aktywni klienci, (wizualizacja produktów 3 podstawowe. spot, pochodne, depo)',
        },
      ],
      more: {
        text: 'chcesz wiedzieć więcej o DSM?',
        cta: 'czytaj dalej'
      }
    },


    events: {
      headline: 'Key Events Headline',
      items: [
        [{
            img: 'img_1.png',
            title: 'W styczniu wdrożyliśmy...',
            author: 'Michał Garski (mBank/DSM)',
          },
          {
            img: 'img_2.png',
            title: '100 mln marży FX',
            author: 'Michał Garski (mBank/DSM)',
          }
        ],
        [{
          img: 'img_3.png',
          title: '200 tys. transakcji walutowych z klintami K1, K2, K3',
          author: 'Piotr Janowski (mBank/DSM)',
          },
          {
            img: 'img_4.png',
            title: '200 tys. transakcji walutowych z klintami K1, K2, K3',
            author: 'Piotr Janowski (mBank/DSM)',
          },
        ],
        [{
          img: 'img_5.png',
          title: 'Ponad 7 tysięcy klientów aktywnych',
          author: 'Piotr Janowski (mBank/DSM)',
          },
          {
            img: 'img_6.png',
            title: 'Ponad 7 tysięcy klientów aktywnych',
            author: 'Piotr Janowski (mBank/DSM)',
          }
        ],
      ],
    },

    jobs: {
      items: [
        {
          title: 'specjalista ds. sprzedaży instrumentów pochodnych',
          url: '#',
        },
                {
          title: 'dealer transakcji pochodnych',
          url: '#',
        },
                {
          title: 'dealer transakcji spot',
          url: '#',
        },
                {
          title: 'dealer transakcji spot',
          url: '#',
        },
      ],
    },
  },
};