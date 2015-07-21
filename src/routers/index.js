/**
 * Created by Izzy on 28/02/15.
 */
'use strict'

var Router = require('koa-router');
var React = require('react');
var index = React.createFactory(require('../views/index'));
var indexRouter = new Router();
var dao = require('../dao/dao');

indexRouter.get('/', function *() {
    var data = yield dao.get();
    this.body=React.renderToString(
        index({
            name: data.name
        })
    );

});

module.exports = indexRouter;

