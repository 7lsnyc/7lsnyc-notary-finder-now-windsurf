import { z } from 'zod';

export const SiteConfigSchema = z.object({
  site: z.object({
    name: z.string(),
    serviceType: z.string(),
    domain: z.string().url(),
  }),
  business: z.object({
    serviceArea: z.string(),
    contactEmail: z.string().email(),
    phoneNumber: z.string(),
  }),
  features: z.object({
    enableGeolocation: z.boolean(),
    enableBooking: z.boolean(),
    enableReviews: z.boolean(),
  }),
});

export const ThemeConfigSchema = z.object({
  colors: z.object({
    brand: z.object({
      primary: z.string(),
      secondary: z.string(),
      accent: z.string(),
    }),
    text: z.object({
      primary: z.string(),
      secondary: z.string(),
      dark: z.string(),
      light: z.string(),
    }),
    background: z.object({
      primary: z.string(),
      secondary: z.string(),
      dark: z.string(),
    }),
  }),
  typography: z.object({
    primary: z.string(),
    secondary: z.string(),
    body: z.object({
      size: z.string(),
      lineHeight: z.string(),
    }),
    small: z.object({
      size: z.string(),
      lineHeight: z.string(),
    }),
  }),
  spacing: z.object({
    container: z.string(),
    section: z.string(),
    component: z.string(),
  }),
  variants: z.object({
    button: z.object({
      primary: z.object({
        background: z.string(),
        text: z.string(),
        hover: z.string(),
        padding: z.string(),
        height: z.string(),
        borderRadius: z.string(),
      }),
      secondary: z.object({
        background: z.string(),
        text: z.string(),
        hover: z.string(),
        padding: z.string(),
        height: z.string(),
        borderRadius: z.string(),
      }),
      text: z.object({
        text: z.string(),
        hover: z.string(),
        padding: z.string(),
      }),
    }),
    navigation: z.object({
      primary: z.object({
        text: z.string(),
        hover: z.string(),
        fontSize: z.string(),
        fontFamily: z.string(),
      }),
      footer: z.object({
        text: z.string(),
        hover: z.string(),
        fontSize: z.string(),
        fontFamily: z.string(),
      }),
    }),
  }),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type ThemeConfig = z.infer<typeof ThemeConfigSchema>;
