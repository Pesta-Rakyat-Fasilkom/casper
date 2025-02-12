import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      minHeight: {
        "view-screen": "calc(100vh - 80px)",
      },
      fontFamily: {
        "husky-stash": "var(--font-husky-stash)",
        geist: "var(--font-geist)",
        orelega: "var(--orelega-one)",
        poppins: "var(--poppins)",
      },
      colors: {
        accents: {
          purple: {
            1: "#240034",
            2: "#3C0056",
            3: "#480068",
            4: "#500073",
            5: "#C9B0D4",
          },
          peach: {
            1: "#733652",
            2: "#BF5989",
            3: "#CC5F92",
            4: "#FF77B7",
            5: "#FFD5E9",
          },
          red: {
            1: "#6F1026",
            2: "#941633",
            3: "#C51D44",
            4: "#F62455",
            5: "#FCBBCA",
          },
          pink: {
            1: "#73476A",
            2: "#BF77B0",
            3: "#CC7EBC",
            4: "#FF9EEB",
            5: "#FFE1F9",
          },
          yellow: {
            1: "#BFAB71",
            2: "#CCB679",
            3: "#E6CD88",
            4: "#FFE497",
            5: "#FFF7DF",
          },
          grey: {
            1: "#ABABAB",
            2: "#CDCDCD",
            3: "#E4E4E4",
            4: "#F7F7F7",
            5: "#FBFBFB",
          },
          blue: {
            1: "#172252",
            2: "#1F2E6E",
            3: "#2A3D92",
            4: "#344CB7",
            5: "#C0C8E9",
          },
          green: {
            1: "#4B5A1A",
            2: "#647923",
            3: "#85A12E",
            4: "#A6C93A",
            5: "#E3EEC2",
          },
        },
        text: {
          dark: {
            1: "#340717",
            2: "#590C28",
            3: "#700F32",
          },
          light: {
            1: "#E5D9EA",
            2: "#F7F3F8",
            3: "#FCFBFD",
          },
        },
        section: {
          1: "#90CAF9",
          2: "#19369C",
          3: "#694AF0",
          4: "#520245",
          5: "#EC7842",
        },
        background: {
          1: "#FFDAFC",
          2: "#F991CC",
          3: "#FDFEF0",
          4: "#DFD9CB",
          5: "#E2F3F4",
          6: "#6DC7D1",
        },
        button: {
          primary: "#F62455",
          secondary: "#A6C93A",
        },
      },
      backgroundImage: {
        "section-6": "linear-gradient(#9865ED, #EC7842)",
        "section-7": "linear-gradient(#90CAF9, #694AF0)",
        "section-8": "linear-gradient(#FFEFD8, #F4B020, #EC7842)",
        "button-chips": "linear-gradient(to bottom right, #F62455, #901532)",
        "icons-success": "linear-gradient(#36823F, #0B5414)",
        "icons-warning": "linear-gradient(#0B5414, #ECA122)",
        "icons-error": "linear-gradient(#CB5353, #9A0101)",
        "icons-loading": "linear-gradient(to bottom right, #694AF0,#90CAF9)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), heroui()],
} satisfies Config;

export default config;
