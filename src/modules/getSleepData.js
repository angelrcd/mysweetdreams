export function getSleepData (arrayData) {
  let accumulatedSleepTime = 0
  let accumulatedAwakenedTimes = 0
  const markArray = []
  for (let i = 0; i < arrayData.length; i++) {
    const start = new Date(arrayData[i].start).getTime()
    const end = new Date(arrayData[i].end).getTime()
    accumulatedSleepTime += end - start
    accumulatedAwakenedTimes += arrayData[i].timesAwakened
    markArray.push(arrayData[i].mark)
  }
  const accumulatedmark = markArray.reduce((a, b) => a + b, 0)
  if (isNaN(accumulatedSleepTime)) {
    return '-'
  }
  console.log(accumulatedSleepTime)
  console.log((accumulatedSleepTime / (60 * 60 * 1000)).toFixed(1))
  return {
    sleepTime: (accumulatedSleepTime / (60 * 60 * 1000)).toFixed(1),
    averageMark: (accumulatedmark / markArray.length).toFixed(1),
    awakenedTime: accumulatedAwakenedTimes
  }
}
