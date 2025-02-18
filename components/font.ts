import {
  Outfit,
  Playfair_Display as Playfair,
  Cormorant as CormorantFont,
  Bricolage_Grotesque as Grotesque,
} from "next/font/google";

export const grotesque = Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
export const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});
export const cormorant = CormorantFont({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const fonts = {
  grotesque,
  outfit,
  playfair,
  cormorant,
};
