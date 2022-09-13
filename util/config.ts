const PROXY_URL = "https://bright-profiterole-5aa5d0.netlify.app/api/world"

let data: any = {};

function setData(k: any, v: any) {
  data[k] = v
}

function getData(k: any): any {
  return data[k]
}

export {
  PROXY_URL,
  setData,
  getData
}


