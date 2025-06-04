function print(num){
    for(let i = 1; i<=num; i++){
        let a = ''
        let j = 1
        while(j <= i){
            if(j === 1){
                a = '1'
            } else {
                a = j + a +j
            }
            j++
        }
        console.log('aa====>', a)
    }
}

function print2(num){
    const resut = new Array(num).fill(0).map((_, i) => {
        const lint = new Array(2 * num - 1).fill(' ')
        lint[num -1] = 1
        for(let j = 2;j<=i+1; j++){
            lint[num - j] = j
            lint[num + j - 2] = j
        }
        return lint.join('')
    }).join('\n')
 
console.log(resut)
}
print2(5)