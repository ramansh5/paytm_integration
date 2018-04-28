import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "material-ui/Checkbox";
import { grey500, white, red500 } from "material-ui/styles/colors";
import TextField from "material-ui/TextField";
import ThemeDefault from "../theme-default";
import {Link} from 'react-router';
import config from '../../config/config';
import { connect } from "react-redux";
import api from "../services/api";
import './FormDesign.css';
import { setAccessToken } from "../services/authService";
import './checkout_form.css';
import './checkout_form_sec.scss';

const styles = {
  loginContainer: {
    //minWidth: 320,
    //maxWidth: 400,
    //height: 'auto',
    position: "fixed",
    top: "20%",
    left: 0,
    right: 0,
    marginLeft: 0
  },
  paper: {
    padding: "1%",
    //overflow: 'auto',
    height: "40%",
    width: "50%",
    marginLeft: "0",
    marginTop: "10"
    //border:'2px purple solid',
    //borderRadius:'5%'
  },
  buttonsDiv: {
    width: "100%",
    textAlign: "center",
    padding: 2
  },
  flatButton: {
    width: "50%",
    color: grey500
  },
  checkRemember: {
    style: {
      float: "left",
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
    width: "30%"
  },
  btn: {
    background: "#4f81e9",
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: "#4f81e9"
  },
  btnGoogle: {
    background: "#e14441"
  },
  btnSpan: {
    marginLeft: 1
  },
  headd: {
    width: "100%",
    backgroundColor: "#039be5", // '#ef5350',
    height: 70
  },
  Hdd: {
    fontSize: "26",
    color: "grey",
    marginTop: "10"
  },

  Hdd1: {
    fontSize: "26",
    color: white,
    marginTop: "0",
    paddingTop: 20
  }
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
   
  }

  handleChange(field, e) {
    let errors = this.state.errors;
    errors["LoginError"] = " ";
    this.setState({ errors });

    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });

    errors[field] = "";
    this.setState({ errors });
  }

  handleSubmit() {

   alert( this.refs.amount.input.value);

  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.headd}>
            <div style={{ marginLeft: "7%" }}>
              <div style={styles.Hdd1}>Morden Tree </div>
            </div>
          </div>

         <div id="wrapper">
    <div id="container">

      <div id="info">
        
        <img id="product" src="http://enwaara.se/codepen/product.png"/>

        <p>Activity Bracelet Surge</p>
        <p>Black</p>

        <div id="price">

          <h2>$ 2 700</h2>

        </div>
      </div>

      <div id="payment">

                            <form id="checkout" className="form-horizontal" name="checkoutForm" 
                        id="form1" method="post" 
                        action="http://localhost:8080/testtxn">
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control" 
                              name="ORDER_ID"
                              value={Date.now() + Math.random().toString(36).substr(2, 9)}
                            />
                          </div>
                        </div>          
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control" 
                            name="CUST_ID"
                            value={Date.now() + Math.random().toString(36).substr(2, 9)}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control" 
                              name="INDUSTRY_TYPE_ID"
                              value={config.INDUSTRY_TYPE_ID}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control"
                              name="CHANNEL_ID" value={config.CHANNEL_ID}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="number" className="form-control" 
                              name="TXN_AMOUNT" placeholder="Enter Amount..."
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control"
                              name="PAYTM_MERCHANT_KEY" value={config.PAYTM_MERCHANT_KEY}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control"
                              name="WEBSITE" value={config.WEBSITE}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-sm-10">
                            <input type="text" hidden="true" className="form-control"
                              name="MID" value={config.MID}
                            />
                          </div>
                        </div>
                        <div className="form-group">        
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-default">Checkout</button>
                          </div>
                        </div>
                      </form>
      </div>

    </div>
</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Checkout;
