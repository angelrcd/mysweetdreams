import { API, IMAGES_URL } from '../../data'

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

export function uploadPicToServer (picture, userId) {
  const blob = picture.slice(0, picture.size, 'image/png')
  const newFile = new File([blob], userId + '.png', { type: 'image/png' })
  const options = {
    mode: 'cors',
    credentials: 'include',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: picture
  }
  console.log(newFile)
  fetch(IMAGES_URL, newFile)
}
