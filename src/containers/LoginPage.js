import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
//import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { grey500, white, red500 } from 'material-ui/styles/colors';
//import PersonAdd from 'material-ui/svg-icons/social/person-add';
//import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
//import {Link} from 'react-router';
import ThemeDefault from '../theme-default';

import { connect } from 'react-redux'
import api from '../services/api'
//import { Router, browserHistory } from 'react-router'
import { setAccessToken } from '../services/authService'




const styles = {
  loginContainer: {
    //minWidth: 320,
    //maxWidth: 400,
    //height: 'auto',
    position: 'fixed',
    top: '20%',
    left: 0,
    right: 0,
    marginLeft: 0
  },
  paper: {
    padding: '1%',
    //overflow: 'auto',
    height: '40%',
    width:'50%',
    marginLeft: '0',
    marginTop: '10',
    //border:'2px purple solid',
    //borderRadius:'5%'
  },
  buttonsDiv: {
    width: '100%',
    textAlign: 'center',
    padding: 2

  },
  flatButton: {

    width: '50%',
    color: grey500

  },
  checkRemember: {
    style: {
      float: 'left',
      maxWidth: 180,

      paddingTop: 5
    },
    labelStyle: {

      color: grey500
    },
    iconStyle: {
      paddingRight: 10,
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    width: '30%'
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 1
  },
  headd: {
    width: '100%',
    backgroundColor: '#039be5',// '#ef5350',
    height: 70

  },
  Hdd: {
    fontSize: '26',
    color: 'grey',
    marginTop: '10'

  },

  Hdd1: {
    fontSize: '26',
    color: white,
    marginTop: '0',
    paddingTop: 20
  },
};



class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      fields: {
      },
      errors: {},

    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }


  login(data) {

    var currentThis = this;



    api.login('/token', data)
      .then((data) => {

        console.log("Login Result", data);

        if (data.error != undefined) {
          let errors = currentThis.state.errors;
          errors["LoginError"] = "Please provide correct user name & password !";
          currentThis.setState({ errors });

          console.log("Login Result inside ", data);

        }
        else {
          if (data.UserTypeId == 1) {
            setAccessToken(data, '/admindashboard')
          }
          else {
            setAccessToken(data, '/customerdashboard')
          }


        }
      })
      .catch((error) => {

        let errors = currentThis.state.errors;
        errors["LoginError"] = error;
        this.setState({ errors });

        console.log('Login error', error)

      })
  }

  handleChange(field, e) {

    let errors = this.state.errors;
    errors["LoginError"] = " ";
    this.setState({ errors });


    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });


    errors[field] = '';
    this.setState({ errors });
  }

  handleSubmit() {
    let formData = {}
    formData['grant_type'] = "password";
    formData['username'] = this.refs.username.input.value;
    formData['password'] = this.refs.password.input.value;

    this.login(formData)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>


        <div>


          <div style={styles.headd}>

            <div style={{ marginLeft: '7%' }}>

              <div style={styles.Hdd1}>My Test App </div>



            </div>
          </div>

          <div style={styles.loginContainer}>

            <center>

              <Paper style={styles.paper}>

                <div className="row">
                  <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 m-b-15 ">
                  <img   style={{ width: '70%' }} />
          </div>
                  <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 m-b-15 ">

                  <div className="row" style={{ width: '100%', marginLeft: '35%' }}>

<div style={styles.Hdd}>

  Sign In
</div> </div>

<form ref="loginForm" autoComplete='off'>

<div className="row" style={{ display: "none" }}>
  <TextField
    ref="username1"
    hintText="E-mail"
    floatingLabelText="E-mail"
    fullWidth={true}
    onChange={e => { this.handleChange('name', e) }}
  />
  <TextField
    ref="password1"
    hintText="Password"
    floatingLabelText="Password"
    fullWidth={true}
    type="password"

  />
</div>
<TextField
  ref="username"
  hintText="E-mail"
  floatingLabelText="E-mail"
  fullWidth={true}
  onChange={e => { this.handleChange('name', e) }}
/>
<TextField
  ref="password"
  hintText="Password"
  floatingLabelText="Password"
  fullWidth={true}
  type="password"
  autocomplete="new-password"
  autocorrect="off"
/>

<div style={{ paddingTop: '5%' }}>
  <Checkbox
    label="Remember me"
    style={styles.checkRemember.style}
    labelStyle={styles.checkRemember.labelStyle}
    iconStyle={styles.checkRemember.iconStyle}
  />

  <RaisedButton label="Login"
    primary={true}
    onClick={() => this.handleSubmit()}
    style={styles.loginBtn} />
</div>

<div className="row" style={{ width: '100%', padding: '2%', color: red500 }}>
  {this.state.errors.LoginError}
</div>

</form>


                  </div>
                </div>







              </Paper>

            </center>


            {/*
                    <img src="../images/bb_logo_wotext.png" />
            <div style={styles.buttonsDiv}>
              <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
                <i className="fa fa-facebook fa-lg"/>
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </Link>
              <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                <i className="fa fa-google-plus fa-lg"/>
                <span style={styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
             */}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

const mapStoreToProps = (state) => {
  //console.log(dispatch);
  return {
    auth: state
  };
};

const loginPage = connect(mapStoreToProps)(LoginPage);

export default loginPage;
