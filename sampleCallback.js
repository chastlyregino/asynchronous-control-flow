// create a file named sampleCallback.js

function myAsync1(callback) {
	setTimeout(() => {
  	callback(null, "async1")
  }, 3000)
}

function myAsync2(callback) {
	setTimeout(() => {
  	callback(null, "async2")
  }, 2000)
}

function myAsync3(callback) {
	setTimeout(() => {
  	callback(null, "async3")
  }, 1000)
}

function myAsync4(callback) {
	setTimeout(() => {
  	try {
			// lets say something happened
    	throw new Error("forced error")
    } catch (err) {
    	return callback(err.message)
    }
  }, 3000)
}

// 1. Need to fix this so that we run it in the proper sequence
// 2. it should be printing the values "async1","async2"... but it seems there is an error in the callback handling
// 3. should 
function start() {
  myAsync1((_err, results) => {
    console.log(results)
    myAsync2((_err, results) => {
        console.log(results)
        myAsync3((_err, results) => {
            console.log(results)
            myAsync4((err, _result) => {
                // can use if else for error handling and printing out
                console.log(err)
            })
        })
    })
  })
}

start()



// Convert this using promises and name the file samplePromise.js
// convert this to promise where everything is needed to be run in parallel and get all result. name the file samplePromis2.js
// convert this using async await where the sequence is respected. name the file sampleAsyncAwait.js