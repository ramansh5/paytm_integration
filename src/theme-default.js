import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';

 
const themeDefault = getMuiTheme({
  palette: {
  },
  //fontFamily: 'Source Sans, "Trebuchet MS", Arial, sans-serif',
  fontFamily : 'Nunito, sans-serif',
   
  
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  },
  
});


export default themeDefault;