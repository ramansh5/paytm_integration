import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600,blueGrey900,blueGrey800} from 'material-ui/styles/colors';
//import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
//import AccountCircle from 'material-ui/svg-icons/action/account-circle';

//import dynamicIcon from './dynamicIcon'
//import store from '../store';



const LeftDrawer = (props) => {

  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14,
      backgroundColor: blueGrey900
    },
    menuItemParent: {
      color: white,
      fontSize: 14,
      backgroundColor: blueGrey800,
      fontWeight: typography.fontWeightLight,
     // padding : '0px'

    },
    menuItemChild: {
      color: white,
      fontSize: 13,
      fontWeight: typography.fontWeightLight,
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
       // backgroundImage:  'url(' + require('../images/material_bg.png') + ')',
       backgroundColor:blueGrey900,
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      },
      leftPosition: {
        left: 10
      }
    }
  };
 

  return (
    <div id="noprint111"  >
    <Drawer

      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          My App
        </div>
        <div style={styles.avatar.div}>
          <Avatar icon={<accountCircle />}
                  //size={50}
                  style={styles.avatar.icon}
                  />

          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <div>

 
        <List  style={styles.menuItem}>
        { props.newMenu.filter((task) => task.ParentId ==null ).map(menu=>

      <ListItem
      style={styles.leftPosition}
              innerDivStyle={{paddingLeft: 50}}
              primaryText={menu.NAME} style={styles.menuItemParent}  leftIcon={<ContentInbox />}
              
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={
  
                props.newMenu.filter((subMenu) => subMenu.ParentId ==menu.pageid ).map((menu1, index) =>
                {
                  return (
                  <ListItem  
               
                  // leftIcon={<dynamicIcon   />} // Example icon = 'action/home'
                  key={index}  primaryText={menu1.NAME}   style={styles.menuItemChild} 
                  containerElement={<Link to={menu1.Url} />}
                   /> 

                   

                )
                 })
                
                } 
              />
            )}
</List>

      
          
 


        </div>
    </Drawer>
    </div>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
