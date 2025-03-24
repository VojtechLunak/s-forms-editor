import { ColorPartial, Palette, SimplePaletteColorOptions } from '@mui/material/styles/createPalette';
import { Theme, ThemeOptions } from '@mui/material/styles';

interface IPalette extends Palette {
  custom: SimplePaletteColorOptions & ColorPartial;
}

interface ITheme extends Theme {
  palette: IPalette;
  custom: any;
}

interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
  custom: any;
}
