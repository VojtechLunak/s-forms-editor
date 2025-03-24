import { makeStyles } from '@mui/material/styles';
import { ITheme } from '@interfaces/index';

export default makeStyles((theme: ITheme) => ({
  addButtonHighlight: {
    border: `2px solid ${theme.palette.custom.main} !important`
  },
  menu: {
    zIndex: 10
  }
}));
