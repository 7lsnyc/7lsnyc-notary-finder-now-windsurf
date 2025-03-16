export const brandConfig = {
  name: 'Notary Finder Now',
  logo: {
    variants: {
      xs: {
        iconSize: 'w-4 h-4',
        textSize: 'text-[14px]',
      },
      small: {
        iconSize: 'w-7 h-7',
        textSize: 'text-[16px]',
      },
      default: {
        iconSize: 'w-8 h-8',
        textSize: 'text-[18px] font-inter',
      },
      large: {
        iconSize: 'w-10 h-10',
        textSize: 'text-[24px]',
      },
      xl: {
        iconSize: 'w-12 h-12',
        textSize: 'text-[32px]',
      },
    },
    layout: {
      horizontal: {
        container: 'flex items-center gap-2',
        iconPosition: 'order-first',
      },
      vertical: {
        container: 'flex flex-col items-center gap-1',
        iconPosition: 'order-first',
      },
      verticalReverse: {
        container: 'flex flex-col items-center gap-1',
        iconPosition: 'order-last',
      },
      horizontalReverse: {
        container: 'flex items-center gap-2',
        iconPosition: 'order-last',
      },
    },
    themes: {
      light: {
        icon: {
          background: 'bg-primary',
          foreground: 'text-white'
        },
        text: 'text-text-dark'
      },
      dark: {
        icon: {
          background: 'bg-primary',
          foreground: 'text-white'
        },
        text: 'text-white'
      },
      minimal: {
        icon: {
          background: 'bg-transparent',
          foreground: 'text-primary'
        },
        text: 'text-text-dark'
      }
    },
  },
} as const;
