const data = [
  {
    _id: '6399e4730ddead45c1c147d0',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-14T14:50:59.879Z',
    timesAwakened: 0,
    __v: 0
  },
  {
    _id: '63a22f7849787f91e94e386b',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-20T17:15:13.475Z',
    timesAwakened: 0,
    __v: 0
  },
  {
    _id: '63a232b7c9d6d6c597af4235',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-21T23:00:00.000Z',
    start: '2022-12-21T23:00:00.000Z',
    end: '2022-12-22T08:00:00.000Z',
    mark: 5,
    timesAwakened: 1,
    restfulSleep: true,
    __v: 0
  },
  {
    _id: '63a233d3c9d6d6c597af423d',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-21T23:00:00.000Z',
    start: '2022-12-21T23:00:00.000Z',
    end: '2022-12-22T08:00:00.000Z',
    timesAwakened: 1,
    restfulSleep: true,
    __v: 0
  },
  {
    _id: '63a239109bc6b3ecaf6c973f',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-25T23:00:00.000Z',
    start: '2022-12-26T01:00:00.000Z',
    end: '2022-12-26T09:30:00.000Z',
    mark: 5,
    timesAwakened: 1,
    restfulSleep: true,
    __v: 0
  },
  {
    _id: '63a239169bc6b3ecaf6c9741',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-25T23:00:00.000Z',
    start: '2022-12-26T01:00:00.000Z',
    end: '2022-12-26T09:30:00.000Z',
    mark: 5,
    timesAwakened: 1,
    restfulSleep: true,
    __v: 0
  },
  {
    _id: '63a239239bc6b3ecaf6c9743',
    userId: '6399e4400ddead45c1c147c8',
    day: '2022-12-26T02:00:00.000Z',
    start: '2022-12-26T01:00:00.000Z',
    end: '2022-12-26T09:30:00.000Z',
    mark: 5,
    timesAwakened: 1,
    restfulSleep: true,
    __v: 0
  }
]

export function filterInfoByDay (sleepData, filter) {
  let result = {}
  sleepData.forEach(element => {
    // console.log(element.day)
    if (element.day === filter) {
      result = element
    }
  })
  return result
}

const dayInfo = filterInfoByDay(data, '2022-12-14T14:50:59.879Z')
console.log(dayInfo)
