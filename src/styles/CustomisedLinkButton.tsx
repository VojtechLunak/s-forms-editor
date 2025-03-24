import { withStyles } from '@mui/material/styles';
import { ITheme } from '../interfaces';
import { Button } from '@mui/material';

// @ts-ignore
export const CustomisedLinkButton = withStyles((theme: ITheme) => ({
  root: {
    color: 'white',
    borderColor: theme.palette.custom.main,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.custom.main
    },
    '&:focus': {
      outline: 'none'
    }
  }
}))(Button);
