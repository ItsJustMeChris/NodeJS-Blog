let router = require('aurora-router');

router.get('/', (req, res) => {
    res.render('index.ejs');
});