import moment from 'moment/moment'

export function isFormValid (input, regex) {
  return regex.test(input)
}

export function IsFormNewUserValid (name, lastName, birthdate) {
  const isNameValid = (name.length >= 3 && name.length <= 20)
  const isLastNameValid = (lastName.length >= 3 && lastName.length <= 20)
  const isBirthdateValid = moment(birthdate).isValid() &&
    moment(birthdate).isAfter(moment('1900-01-01')) &&
    moment(birthdate).isBefore(moment('2020-01-01'))
  return isNameValid && isLastNameValid && isBirthdateValid
}
