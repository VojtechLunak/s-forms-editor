import { withStyles } from '@mui/material/styles';
import { ITheme } from '../interfaces';
import { Button } from '@mui/material';

// @ts-ignore
export const CustomisedOutlineButton = withStyles((theme: ITheme) => ({
  root: {
    color: theme.palette.custom.main,
    borderColor: theme.palette.custom.main,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.palette.custom.main,
      color: 'white'
    },
    '&:focus': {
      outline: 'none'
    }
  }
}))(Button);
