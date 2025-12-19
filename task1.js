let delayFunct = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
let callBack = (a,b) => {

    return a + b 

}

async function delayedAdd(a, b, delay, callback) {

    await delayFunct(delay)

    let result = callback(a, b)

    console.log(result)

}

delayedAdd(5, 10, 5000, callBack)