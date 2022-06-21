export const throttle = (callback, delay = 1000) => {
  let isWaiting = false
  // save new args when waiting, invoke w/ callback once done waiting
  let waitingArgs

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      // start wait until trottle is called again
      isWaiting = false
    } else {
      // if there are waitingArgs, invoke callback & restart timer
      callback(...waitingArgs)
      waitingArgs = null
      // reset waitingArgs, execute as soon as delay is done
      setTimeout(timeoutFunc, delay)
    }
  }
  return (...args) => {
    if (isWaiting) {
      waitingArgs = args
      return
    }
    callback(...args)
    isWaiting = true
    
    setTimeout(timeoutFunc, delay)
  }
}