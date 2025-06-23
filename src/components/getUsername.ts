
function getCookieValue(key) {
  const match = document.cookie.split('; ')
    .find(row => row.startsWith(`${key}=`))

  if (!match)
    return undefined

  return match.split('=')[1].replace(/^"(.*)"$/, '$1')
}

const user = getCookieValue('sage_username')

export default function getUsername() {
  return user
}