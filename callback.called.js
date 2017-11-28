const sinon = require('sinon')

var callback = sinon.spy();

const targetFunction = (msg, cb) => {
    const _msg = '[INFO]'+msg
    cb(_msg)
}

targetFunction('peter', callback)

console.log('callback.called: ', callback.called)