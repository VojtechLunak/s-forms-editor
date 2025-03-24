import { withStyles } from '@mui/material/styles';
import { ITheme } from '../interfaces';
import { FormControlLabel } from '@mui/material';

// @ts-ignore
export const CustomisedFormControlLabel = withStyles((theme: ITheme) => ({
  root: {
    '& .MuiIconButton-label': {
      color: 'white'
    },
    '& .MuiCheckbox-root': {
      padding: '0 9px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem'
    }
  }
}))(FormControlLabel);
