var checksum = require('../../model/checksum');
var config = require('../../config/config');

module.exports = function (app) {
  app.post('/testtxn',function(req, res) {
        console.log("POST Order start");
        var paramlist = req.body;
        var paramarray = new Array();
        console.log(paramlist);
        for (name in paramlist)
        {
          if (name == 'PAYTM_MERCHANT_KEY') {
               var PAYTM_MERCHANT_KEY = paramlist[name] ; 
            }else
            {
            paramarray[name] = paramlist[name] ;
            }
        }
        console.log(paramarray);
        paramarray['CALLBACK_URL'] = 'http://localhost:8080/response';  // in case if you want to send callback
        console.log(PAYTM_MERCHANT_KEY);
        checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function (err, result) 
        {
              console.log(result);
           res.render('pageredirect.jsx',{ 'restdata' : result });
        });

        console.log("POST Order end");

 });

    app.post('/response',function(req, res) {
        if(req.body.STATUS === 'TXN_FAILURE'){
           res.redirect(`http://localhost:3000/paymentfailure?data=${JSON.stringify(req.body)}`)
        } else{
          res.redirect(`http://localhost:3000/paymentsuccess?data=${JSON.stringify(req.body)}`)
        }

 });

};