var express = require('express');
var router = express.Router();

router.get('/notificacoes', function(req, res) {
  res.end('exibe todas notifs');
});

router.post('/notificacoes', function(req, res, next) {
    var resp = {};
    resp.msg = 'post';
    resp.body = req.body;
    res.json(resp);
  
});

router.get('/notificacoes/:id', function(req, res, next) {
    var resp = {};
    resp.msg = 'get';
    resp.params = req.params;
    resp.body = req.body;
    res.json(resp);    
});

router.put('/notificacoes/:id', function(req, res, next) {
    var resp = {};
    resp.msg = 'put';
    resp.params = req.params;
    resp.body = req.body;
    res.json(resp);
});

router.delete('/notificacoes/:id', function(req, res, next) {
    var resp = {};
    resp.msg = 'delete';
    resp.params = req.params;
    resp.body = req.body;
    res.json(resp);
});

module.exports = router;