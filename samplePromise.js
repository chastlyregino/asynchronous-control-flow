// create a file named sampleCallback.js
// Promises syntax is (resolve, reject) all the time

function myAsync1() {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
  	    resolve("async1")
        }, 3000)
    })
}

function myAsync2() {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("async2")
        }, 2000)
    })
}

function myAsync3() {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("async3")
        }, 1000)
    })
}

function myAsync4() {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                    // lets say something happened
                throw new Error("forced error")
            } catch (err) {
                return reject(err.message)
            }
        }, 3000)
    })
}

// 1. Need to fix this so that we run it in the proper sequence
// 2. it should be printing the values "async1","async2"... but it seems there is an error in the callback handling
// 3. should 
function start() {
    myAsync1().then((resolve) => {
      console.log(resolve)
      return myAsync2()
    }).then((resolve) => {
        console.log(resolve)
        return myAsync3()
      }).then((resolve) => {
        console.log(resolve)
        return myAsync4()
      }).catch((reject) => {
        console.log(reject)
      })
  }

start()

// Convert this using promises and name the file samplePromise.js
// convert this to promise where everything is needed to be run in parallel and get all result. name the file samplePromise2.js
// convert this using async await where the sequence is respected. name the file sampleAsyncAwait.js