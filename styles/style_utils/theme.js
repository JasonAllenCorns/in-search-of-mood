import { createTheme } from "@mui/material/styles";
import grey from "@mui/material/colors/grey"
import cyan from "@mui/material/colors/cyan"


export const common = {
};

export const dark = {
};

export const light = {
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#212C39"
    },
    secondary: {
      main: ""
    },
    text: {
      primary: common.brandWhite
    }
  }
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