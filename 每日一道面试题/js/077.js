async function asyncReplaceAll(str, regexp, replacer){
    String.prototype.asyncReplaceAll = async function () {
        if(typeof regexp === 'string'){
            regexp = new RegExp(regexp, 'g')
        } else if(regexp instanceof RegExp){
            if(!regexp.global){
                return new Error('regexp 不是一个全局的正则')
            }
            regexp = new RegExp(regexp.source, 'g')
        }
    
        if(typeof replacer === 'string'){
            return this.replace(regexp, replacer)
        } else if(typeof replacer !== 'function'){
            return new Error('replacer 不是一个字符串或者函数')
        }
    
        const matches = this.match(regexp)
        let targets =  matches.map(replacer)
          targets = await Promise.all(targets)
          return this.replace(regexp, () => targets.shift())
    }
   const newText =  await str.asyncReplaceAll()
   String.prototype.asyncReplaceAll = void 0
    return newText

}

String.prototype.asyncReplaceAll = async function (regexp, replacer) {
    if(typeof regexp === 'string'){
        regexp = new RegExp(regexp, 'g')
    } else if(regexp instanceof RegExp){
        if(!regexp.global){
            return new Error('regexp 不是一个全局的正则')
        }
        regexp = new RegExp(regexp.source, 'g')
    }

    if(typeof replacer === 'string'){
        return this.replace(regexp, replacer)
    } else if(typeof replacer !== 'function'){
        return new Error('replacer 不是一个字符串或者函数')
    }

    const matches = this.match(regexp)
    let targets =  matches.map(replacer)
      targets = await Promise.all(targets)
      return this.replace(regexp, () => targets.shift())
}

const str ='1,2,15---asdask43##$44*12(111-----'

const getName = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('name' + num)
        }, Math.random() * 500)
    })
}


(async ()=> {
    // const a = await str.asyncReplaceAll(/(\d+)/g, getName)
    const a = await asyncReplaceAll(str, /(\d+)/g, getName)
    console.log(a)
})()