var monk = require('monk');
var redis = require("redis");
var config = require("config");
var wrap = require('co-monk');
var coRedis = require("co-redis");
var useCache = config.get("cache.enabled");
// redis
if(useCache)
    var cache = redis.createClient(config.get("cache.port"), config.get("cache.host"));

// mongo
var db = monk(config.get("db.host")+":"+ config.get("db.port") + "/" + config.get("db.name"));


var dao = {
    get : function *() {
        if(useCache)
            var doc = yield coRedis(cache).get('cachedDoc');
        if(!doc) {
            doc = yield wrap(db.get('user').findOne({role:'admin'}));
            if(useCache)
                yield coRedis(cache).set('cachedDoc', JSON.stringify(doc));
        } else {
            doc = JSON.parse(doc);
        }
        console.log("doc is " + doc);

        return doc;
    }
};

module.exports = dao;