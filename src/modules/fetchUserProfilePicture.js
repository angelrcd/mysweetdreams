import { API } from '../../data'

export function changeDBUserProfilePic (userId) {
  const options = {
    credentials: 'include',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profilePic: userId + '.png' })
  }

  fetch(API.USERS.MY_USER, options)
}
