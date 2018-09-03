import api from '../utils/request'

export function getNews () {
  // const __APIHOST__ = '';
  /* global __APIHOST__:false */
  return api.JH_news(`${__APIHOST__}/news/index`, 'type=top&key=123456')
}
