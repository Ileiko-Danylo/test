// // sequentially without async/await.  also onFulfilled() may be used 
// const fn1 = () =>{
//     return new Promise(()=>{
//         console.log('function 1');
//     })
// }

// const fn2 = () =>{
//     return new Promise(()=>{
//         console.log('function 2');
//     })
// }

// const fn3 = () => {
//     return new Promise(()=>{
//         console.log('function 3');
//     })
// }

// const callFunctions = () => fn1().then(fn2()).then(fn3()).catch(console.error);

// callFunctions();

// or like this:

// const fnBuilder = (fnNumber, sleepMilliseconds) => {
//     return new Promise(() => {
//         setTimeout(() => {
//             console.log(`function ${fnNumber}   ${sleepMilliseconds}`)
//         }, sleepMilliseconds)
//     })
// }

// console.log(Promise.all([
//     fnBuilder(3, 3000),
//     fnBuilder(1, 1000),
//     fnBuilder(2, 2000),
// ]));


// // sequentially using async/await 
// const fn1 = () => {
//     console.log('function 1');
// }

// const fn2 = async () => {
//     await fn1()
//     console.log('function 2');

// }

// const fn3 = async () => {
//     await fn2()
//     console.log('function 3');
// }

// fn3()



// // Execute the promises in parallel using async/await. 
// const fnBuilder = (fnNumber, sleepMilliseconds) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(`function ${fnNumber}   ${sleepMilliseconds}`)
//         }, sleepMilliseconds)
//     })
// }

// async function main() {
// 	console.time('main')

// 	const [firstFn, secondFn, thirdFn] = await Promise.all([
// 		fnBuilder(1, 1000), 
// 		fnBuilder(3, 3000),
// 		fnBuilder(2, 2000),
// 	])

//     console.log(firstFn)
// 	console.log(secondFn)
// 	console.log(thirdFn)

// 	console.timeEnd('main')
// }

// main()

// Execute the promises in parallel without using async/await. 
const fnBuilder = (fnNumber, sleepMilliseconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`function ${fnNumber}   ${sleepMilliseconds}`)
        }, sleepMilliseconds)
    })
}


Promise.all([
    fnBuilder(1, 1000),
    fnBuilder(3, 3000),
    fnBuilder(2, 2000)
])