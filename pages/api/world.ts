// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { setData, getData } from '../ctx/data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).setHeader("Content-Type", "text/html; charset=UTF-8").send(getData('proxy'))
}
