var checksum = require('../../model/checksum');

module.exports = function (app) {
	app.get('/pgredirect', function(req,res){
    res.render('pageredirect.jsx');
  });
};
