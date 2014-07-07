var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res) {
   res.render('generate');
});

router.post('/', function(req,res){
   //handle posted stuff and return config
   var username = req.body.email;
   var email = username+"@zoominternet.net";
   var name = req.body.name;
   var serverType = req.body.serverType=='imap'?'EmailTypeIMAP':'EmailTypePOP';
   var serverType, port;
   if(req.body.serverType == 'imap'){
     serverType = "EmailTypeIMAP";
     port = "143";
   }else{
     serverType = "EmailTypePOP";
     port = "110";
   }
   res.set({
      'Content-Type': 'application/x-apple-aspen-config',
      'Content-Disposition': 'attachment; filename="email.mobileconfig"'
   });
   res.render('config', {
      name: name,
      email: email,
      username: username,
      serverType: serverType,
      incomingPort: port
   });
});

router.post('/post', function(req, res){
  res.render('post', {
    foo: JSON.stringify(req.body, undefined, 2)
  });
});

module.exports = router;