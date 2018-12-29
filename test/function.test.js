const { init, Func } = require("fpmc-jssdk");
const assert = require('assert');
init({ appkey:'123123', masterKey:'123123', endpoint: 'http://localhost:9999/api' });

describe('Function', function(){
  beforeEach(done => {
    done()
  })


  afterEach(done => {
    done()
  })

  it('Function A', function(done){
    var func = new Func('test.foo');
    func.invoke({})
      .then(function(data){
        assert.strictEqual(data == undefined, false, 'should not be undefined');
        done();
      }).catch(function(err){
        done(err);
      })
  })
})
