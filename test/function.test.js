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

  it('Function A', async () => {
    try {
      const data = await new Func('test.foo').invoke()
      assert.strictEqual(data == undefined, false, 'should not be undefined');
    } catch (error) {
      throw error;
    }
  })
})
