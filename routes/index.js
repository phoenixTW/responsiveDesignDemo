var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var images = [
      "http://naturalsociety.com/wp-content/uploads/6981704-beautiful-trees-background-735x350.jpg",
      "http://www.natureasia.com/common/img/splash/thailand.jpg",
      "http://www.planwallpaper.com/static/images/nature_backgrounds_wonderful_edition_photo_hq_7051.jpg",
      "https://www.naturefind.com/wp-content/uploads/2015/06/paddle-839814_1280-e1439222071867-900x400.jpg"
  ];

  res.render('index', { title: 'Express', pictures: images });
});

module.exports = router;
