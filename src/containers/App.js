import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';

import { connect } from 'react-redux';
import {  browserHistory } from 'react-router';
import { isLoggedIn } from '../services/authService';
import api from '../services/api';
//import { red100 } from 'material-ui/styles/colors';
import { getLoggedInName } from '../services/authService';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true,
      menuDetails :[]
    };
  }

   
  componentDidMount() {
    
   
   // this.getMenuDetails();

  }
  
  getMenuDetails()
  {
    const input = {
      "var":1
        }
  
        console.log("before Response",this.state.menuDetails); 
        return api.post('/api/GetMenuDetails',input)
        .then( (data) => {
          console.log("Response",data);
          this.setState({menuDetails: data.Table });  
          console.log("after Response",this.state.menuDetails); 

        

          
        })
        .catch( (error) => { console.log('error', error) })
  }
  componentWillMount () {

    if(!isLoggedIn()) {
        browserHistory.replace('./checkout');
     }
      
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });

  
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

           
<LeftDrawer
 
navDrawerOpen={navDrawerOpen}
            menus={Data.menus}
            username={'Hi '+getLoggedInName()}
            newMenu={this.state.menuDetails}
            
            />
            

            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
  
App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth.info,
    currentURL: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(withWidth()(App));




