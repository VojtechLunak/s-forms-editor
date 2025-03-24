import makeStyles from '@mui/styles/makeStyles';
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
