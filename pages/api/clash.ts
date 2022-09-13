
import type { NextApiRequest, NextApiResponse } from 'next'
import {PROXY_URL, setData} from '../../util/config'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  // res.status(200).json({ name: 'John Doe' })
  const obj = JSON.parse(req.body)
  setData('clash', obj.clash.replace("http://192.168.60.132:8086/api2/clash/bestproxies", PROXY_URL))
  setData('proxy', obj.proxy)
  res.status(200).send('ok')
}
