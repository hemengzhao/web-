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

// 定义一个函数print2，参数为num
function print2(num){
    // 创建一个长度为num的数组，并填充为0
    const resut = new Array(num).fill(0).map((_, i) => {
        // 创建一个长度为2*num-1的数组，并填充为空格
        const lint = new Array(2 * num - 1).fill(' ')
        // 将数组的中间位置设置为1
        lint[num -1] = 1
        // 从2开始循环，直到i+1
        for(let j = 2;j<=i+1; j++){
            // 将数组的左边和右边分别设置为j
            lint[num - j] = j
            lint[num + j - 2] = j
        }
        // 将数组转换为字符串，并返回
        return lint.join('')
    }).join('\n')
 
// 打印结果
console.log(resut)
}
print2(5)


//     1    
//    212   
//   32123  
//  4321234 
// 543212345