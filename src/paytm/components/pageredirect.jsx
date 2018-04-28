var React = require('react');
 
var Pageredirect = React.createClass({
  render: function () {
    return (
      <html>
        <head>
        <title>Merchant Check Out Page</title>
        </head>
        <body>
          <center><h1>Please do not refresh this page...</h1></center>
            <form method="post" action="https://pguat.paytm.com/oltp-web/processTransaction" name="f1"> 
            <input hidden name="ORDER_ID" value={this.props.restdata['ORDER_ID']} />
                <input hidden name="CUST_ID" value={this.props.restdata['CUST_ID']} />
                <input hidden name="INDUSTRY_TYPE_ID" value={this.props.restdata['INDUSTRY_TYPE_ID']} />
                <input hidden name="CHANNEL_ID" value={this.props.restdata['CHANNEL_ID']} />
                <input hidden name="TXN_AMOUNT" value={this.props.restdata['TXN_AMOUNT']} />
                <input hidden name="MID" value={this.props.restdata['MID']} />
                <input hidden name="WEBSITE" value={this.props.restdata['WEBSITE']} />
                <input hidden name="CALLBACK_URL" value={this.props.restdata['CALLBACK_URL']} />
                <input hidden name="CHECKSUMHASH" value={this.props.restdata['CHECKSUMHASH']} />
            <script type="text/javascript">
              document.f1.submit();
            </script>
          </form>
        </body>
      </html>
    );
  }
});
 
module.exports = Pageredirect;