let delayPromise = (mc) => new Promise((resolve) => setTimeout(resolve, mc))

let addAsync = async (a, b, delay = 50) => {

    let sum = (a, b) => new Promise((resolve) => resolve(a + b))

    await delayPromise(delay)
    let sumNumber = await sum(a,b)
    console.log(sumNumber)
}

addAsync(2, 3)





