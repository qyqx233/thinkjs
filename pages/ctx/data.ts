let data: any = {};

export function setData(k: any, v: any) {
  data[k] = v
}

export function getData(k: any): any {
  return data[k]
}