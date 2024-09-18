
console.log("🚀 ~ exports:", exports === module.exports,  exports === this)
exports.a = {a: 1}
this.a.b = 2
exports = {
    a: 'abbc'
}
 



