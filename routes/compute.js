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
    res.write('Math.fround applied to '+storeValue+" is "+Math.fround(storeValue)+"\n");
    res.end('Math.round applied to '+storeValue+" is "+Math.round(storeValue));
 });

module.exports = router;