const url = 'https://api.github.com/users/SirZeck/followers'

const fetchFollowers = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default fetchFollowers
