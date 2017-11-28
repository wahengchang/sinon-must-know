const sinon = require('sinon')

const print = {
    fun1 : function(msg){
        console.log('[FUN1] : ', msg)
    }
}

sinon.spy(print, "fun1");

print.fun1(' second called')
console.log('print.fun1.calledOnce:         ', print.fun1.calledOnce)
console.log("print.fun1.getCall(0).args:    ", print.fun1.getCall(0).args);