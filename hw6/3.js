const V = require('./vector1')
var v1 = new V.Vector([1,2,3])
var v2 = new V.Vector([1,1,1])
console.log('v1.add(v2)=', v1.add(v2))
console.log('v1.dot(v2)=', v1.dot(v2))
console.log('v1.neg()=', v1.neg())