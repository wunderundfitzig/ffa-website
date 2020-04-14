import fetch from 'isomorphic-unfetch'

export async function getPages() {
  const url = process.env.WP_API_URL + '/pages'
  const res = await fetch(url)
  const json = await res.json()
  return json
}
