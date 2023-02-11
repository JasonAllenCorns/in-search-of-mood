import { createTheme } from '@mui/material/styles';

export const common = {
  brandWhite: '#f2fff3',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#212C39',
    },
    secondary: {
      main: '#8FBE81',
    },
    text: {
      main: common.brandWhite,
    },
    accent: {
      main: common.brandWhite,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

// common: CommonColors;
// mode: PaletteMode;
// contrastThreshold: number;
// tonalOffset: PaletteTonalOffset;
// primary: PaletteColor;
// secondary: PaletteColor;
// error: PaletteColor;
// warning: PaletteColor;
// info: PaletteColor;
// success: PaletteColor;
// grey: Color;
// text: TypeText;
// divider: TypeDivider;
// action: TypeAction;
// background: TypeBackground;
