const process = require('process')
const _lodash = require('lodash')

//const {list,add}=require('./books')

const {items,sum}=require('./books')
const { log } = require('console')
console.log(items)
console,log(sum(3,6))
console.log(_lodash.camelCase('dhriti pyne'))