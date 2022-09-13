const PROXY_URL = ""

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


