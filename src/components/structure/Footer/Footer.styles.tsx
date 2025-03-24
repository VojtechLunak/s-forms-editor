import makeStyles from '@mui/styles/makeStyles';
import { ITheme } from '@interfaces/index';

export default makeStyles((theme: ITheme) => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    textAlign: 'center',
    color: 'white'
  }
}));
