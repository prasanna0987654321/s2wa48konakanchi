var express = require('express');
var router = express.Router();
var storeValue;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

      storeValue=Number(search_params.get("x"))
   
    if(storeValue == 0)
    storeValue=Math.random()
    res.write('Math.abs applied to '+storeValue+" is "+Math.abs(storeValue)+"\n");
    res.write('Math.acos applied to '+storeValue+" is "+Math.acos(storeValue)+"\n");
    res.write('Math.sin applied to '+storeValue+" is "+Math.sin(storeValue)+"\n");
    res.end('Math.sinh applied to '+storeValue+" is "+Math.sinh(storeValue));


 });

module.exports = router;