// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  stable: string
  beta: string
  nightly: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ stable: 'v0.34.0', beta: 'v0.34.0', nightly: 'v0.34.0' })
}
