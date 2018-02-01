const axios = require('axios')

module.exports = async function ({ name, version, token }) {
  const config = {}
  if (token) {
    config.headers = {
      authorization: `Bearer ${token}`
    }
  }
  const url = `https://registry.npmjs.org/${name.replace('/', '%2f')}`
  const res = await axios.get(url, config)
  const versions = Object.keys(res.data.time)

  return versions.includes(version)
}
