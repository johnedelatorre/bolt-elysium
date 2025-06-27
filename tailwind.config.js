module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "badge-subdued": "var(--badge-subdued)",
        "brand-primary-006bb4": "var(--brand-primary-006bb4)",
        "buttons-background-normal-default-text":
          "var(--buttons-background-normal-default-text)",
        "buttons-text-normal-text": "var(--buttons-text-normal-text)",
        buttonsbackgroundnormaldefaultprimary:
          "var(--buttonsbackgroundnormaldefaultprimary)",
        buttonstextnormalprimary: "var(--buttonstextnormalprimary)",
        buttonstextnormalsecondary: "var(--buttonstextnormalsecondary)",
        "common-euifocusbackgroundcolor":
          "var(--common-euifocusbackgroundcolor)",
        "core-darkest-euicolordarkestshade":
          "var(--core-darkest-euicolordarkestshade)",
        "core-full-euicolorfullshade": "var(--core-full-euicolorfullshade)",
        "core-lightest-euicolorlightestshade":
          "var(--core-lightest-euicolorlightestshade)",
        "core-medium-euicolormediumshade":
          "var(--core-medium-euicolormediumshade)",
        "coredanger-euicolordanger": "var(--coredanger-euicolordanger)",
        "coredarkthemedarktheme-background":
          "var(--coredarkthemedarktheme-background)",
        "coredarkthemedarktheme-icons": "var(--coredarkthemedarktheme-icons)",
        "coreempty-euicoloremptyshade": "var(--coreempty-euicoloremptyshade)",
        "corelight-euicolorlightshade": "var(--corelight-euicolorlightshade)",
        "coreprimary-euicolorprimary": "var(--coreprimary-euicolorprimary)",
        "coresuccess-euicolorsuccess": "var(--coresuccess-euicolorsuccess)",
        "coreterciary-euicolorterciary": "var(--coreterciary-euicolorterciary)",
        "forms-euiformbackgroundcolor": "var(--forms-euiformbackgroundcolor)",
        "forms-euiformbordercolor": "var(--forms-euiformbordercolor)",
        "forms-euiformborderopaquecolor":
          "var(--forms-euiformborderopaquecolor)",
        "forms-euiformcustomcontrolbordercolor":
          "var(--forms-euiformcustomcontrolbordercolor)",
        "forms-euiforminputgrouplabelbackground":
          "var(--forms-euiforminputgrouplabelbackground)",
        "graphic-success": "var(--graphic-success)",
        panelplain: "var(--panelplain)",
        "text-disabled-euicolordisabledtext":
          "var(--text-disabled-euicolordisabledtext)",
        "text-subdued-euitextsubduedcolor":
          "var(--text-subdued-euitextsubduedcolor)",
        "text-text-euitextcolor": "var(--text-text-euitextcolor)",
        "textaccent-euicoloraccenttext": "var(--textaccent-euicoloraccenttext)",
        "textprimary-euicolorprimarytext":
          "var(--textprimary-euicolorprimarytext)",
        "texttitle-euititlecolor": "var(--texttitle-euititlecolor)",
        "viz-behind-text-euicolorvis0behindtext":
          "var(--viz-behind-text-euicolorvis0behindtext)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "m-heading-4": "var(--m-heading-4-font-family)",
        "m-paragraph-regular": "var(--m-paragraph-regular-font-family)",
        "m-small-regular": "var(--m-small-regular-font-family)",
        "s-paragraph-bold": "var(--s-paragraph-bold-font-family)",
        "s-paragraph-regular": "var(--s-paragraph-regular-font-family)",
        "text-beta": "var(--text-beta-font-family)",
        "text-small-paragraph-medium":
          "var(--text-small-paragraph-medium-font-family)",
        "title-large": "var(--title-large-font-family)",
        "title-small": "var(--title-small-font-family)",
        "title-x-small": "var(--title-x-small-font-family)",
        "title-XX-small": "var(--title-XX-small-font-family)",
        "XS-paragraph-medium": "var(--XS-paragraph-medium-font-family)",
        "XS-paragraph-semibold": "var(--XS-paragraph-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "border-bottom": "var(--border-bottom)",
        "filter-button-border-right": "var(--filter-button-border-right)",
        "shadow-bottom-medium": "var(--shadow-bottom-medium)",
        "shadow-bottom-small": "var(--shadow-bottom-small)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
