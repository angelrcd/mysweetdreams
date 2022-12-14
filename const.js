export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const PSWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

export const LANDING_URL = 'http://localhost:5173/'
// export const LANDING_URL = 'https://mysweetdreams.es'
const API_URL = 'http://localhost:3000'
// const API_URL = 'https://api.mysweetdreams.es'

export const API = {
  USERS: {
    GET_ALL: API_URL + '/users',
    MY_USER: API_URL + '/users/myUser',
    ADD: API_URL + '/users/add'
  },
  AUTH: API_URL + '/auth',
  SLEEP: {
    DAY: API_URL + '/data/day',
    WEEK: API_URL + '/data/week',
    MONTH: API_URL + '/data/month',
    WEEK_AVERAGE: API_URL + '/data/week/averageSleepHours',
    MONTH_AVERAGE: API_URL + '/data/month/averageSleepHours',
    ALL_DATA: API_URL + '/data/allData',
    POST: API_URL + '/data/'
  }
}

export const SOCIAL = {
  FACEBOOK: 'https://www.facebook.com/profile.php?id=100088317490253',
  TWITTER: 'https://twitter.com/mySweetDreamsAp',
  INSTAGRAM: 'https://www.instagram.com/mysweetdreamsapp/'
}
