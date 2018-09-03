import { getNews } from '../services/api'

export async function setArti () {
  const data = await getNews()
  return data.articles
}

export function sum (a, b) {
  return a + b
}
