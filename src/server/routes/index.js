var express = require('express');
var router = express.Router();

var emails = ['hello@gmail.com', 'bademail@yahoo.com', 'spamemail@blank.com'];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Form Validation' });
});

router.post('/', function(req, res, next) {
    var opt = req.body.option;
    var email = req.body.email;

    // if (itworks) {
    //   render something successful
    // } else {
    //   throw an error back
    // }

    var errors = validate(req.body);
    console.log('Errors: ',errors);

    if( errors.length ) {
      res.render('index', { title: 'Some Errors:', errors: errors });
    } else {
      res.status(200).render('index', { title: 'You done a validate'});
    }

});

module.exports = router;


function validate (body) {
  var errors = [];

  if( emails.indexOf(body.email) !== -1 ) { errors.push('Email already exists'); }
  if( !body.option ) { errors.push('No hate mail.'); }

  return errors;

}
