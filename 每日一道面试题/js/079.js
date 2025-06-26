
const pre1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success=>1')

      console.log('🚀 ~ pre1 ~ pre1: 1', 1)
    }, Math.random() * 1000)
  })
}

const pre2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success=>2')
      console.log('🚀 ~ pre1 ~ pre2: 2', 2)
    }, Math.random() * 1000)
  })
}

const pre3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success=>3')
      console.log('🚀 ~ pre1 ~ pre31: 3', 3)
    }, Math.random() * 1000)
  })
}

const pre4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success=>4')
      console.log('🚀 ~ pre1 ~ pre4: 4', 4)
    }, Math.random() * 1000)
  })
}

async function aws() {
  console.log('🚀 ~ pre1 ~ res: 1111111111111111111111111111111111111111')
 const data  = await pre1()
    .then((res) => {
      console.log('🚀 ~ pre1 ~ res:  1111', res)
      return pre2()
    })
    .then((res) => {
      console.log('🚀 ~ pre1 ~ res: 222', res)
      return pre3()
    })
    .then((res) => {
      console.log('🚀 ~ pre1 ~ res: 333', res)
      return pre4()
    })
    .then((res) => {
      console.log('🚀 ~ pre1 ~ res: 4444', res)
      // return 'ads'
      return Promise.reject('fasle')

    }).catch((err) =>{
      console.log("🚀 ~ .then ~ err:", err)
      return false
    })

    
    console.log("🚀 ~ aws ~ data:", data)
  console.log('🚀 ~ pre1 ~ res: 222222222222222222222')
}
aws()
// 🚀 ~ pre1 ~ pre1: 1 1
// 🚀 ~ pre1 ~ res:  1111 success=>1
// 🚀 ~ pre1 ~ pre2: 2 2
// 🚀 ~ pre1 ~ res: 222 success=>2
// 🚀 ~ pre1 ~ pre31: 3 3
// 🚀 ~ pre1 ~ res: 333 success=>3
// 🚀 ~ pre1 ~ pre4: 4 4
// 🚀 ~ pre1 ~ res: 4444 success=>4
// 🚀 ~ pre1 ~ res: 222222222222222222222