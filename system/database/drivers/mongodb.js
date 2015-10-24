var events = require('events');

var Emitter = new events.EventEmitter();

var Driver = function(){


    var driver = this;

    this.connect = function(){

        this._client = require('mongodb').MongoClient;

        this._client.connect('mongodb://luxy:085bdb2261@db.vakoo.ru:27017/luxy',function(err,db){
            if(err){
                driver.emitter.emit('db_err',err);
            }else{
                driver.emitter.emit('db_conn',db);
            }
        });
    }

    this.emitter = Emitter;

    return this;
}



module.exports = Driver;

