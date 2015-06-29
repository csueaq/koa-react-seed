require("babel/register");
var koa = require('koa');
var app = koa();
var serve = require('koa-static');
var React = require('react');
var indexRouter = require('./src/routers/index');



app.use(serve('public'));

// logger
var logging = function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
};

app.use(logging);


app
    .use(indexRouter.middleware());

app.listen(3000);