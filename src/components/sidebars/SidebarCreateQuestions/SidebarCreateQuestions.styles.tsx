import { makeStyles } from '@mui/material/styles';
import { ITheme } from '@interfaces/index';

// @ts-ignore
export default makeStyles((theme: ITheme) => ({
  form: {
    '& > *': {
      width: '100%'
    }
  },
  sidebarButtons: {
    display: 'flex'
  },
  saveButton: {
    width: '150px'
  }
}));
