// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"; //mui den createPalette default alıp üstüne ekleme yapıyoruz

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string; //themes.ts deki sistem
  }

  interface Palette {
    tertiary: PaletteColor; //primary secondary grey ve background var ama tertiary yok onu ekledim.
  }
}