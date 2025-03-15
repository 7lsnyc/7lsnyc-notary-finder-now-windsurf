export const brandConfig = {
  name: 'Notary Finder Now',
  logo: {
    variants: {
      small: {
        iconSize: 'w-6 h-6',
        textSize: 'text-[16px]',
      },
      default: {
        iconSize: 'w-8 h-8',
        textSize: 'text-[20px]',
      },
      large: {
        iconSize: 'w-10 h-10',
        textSize: 'text-[24px]',
      },
    },
    colors: {
      icon: {
        background: 'bg-primary',
        foreground: 'text-white',
      },
      text: 'text-text-dark',
    },
  },
} as const;
