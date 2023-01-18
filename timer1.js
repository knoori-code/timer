const times = process.argv.slice(2)

const simpleTimer = (times) => {

  let newTimes = times.map((time) => {
  return Number(time) * 1000;
  })
  // console.log(newTimes)

  if (!newTimes.length) {
    return
  }

  for (let num of newTimes) {

    if (num < 0) {
      return
    }
    if (isNaN(num)) {
      return
    }
    
    setTimeout(() => {
      process.stdout.write('.');
    }, num)

  }
}

simpleTimer(times)