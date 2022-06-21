// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
  positives: string
}

async function fetched(){
  const raw_data = await axios.get(`https://www.virustotal.com/vtapi/v2/file/report?apikey=${process.env.VIRUSTOTAL_API_KEY}&resource=95e7f2e283ad834bf55fc7dffde4717fffbce933124176ad09ed9da85b34354e`)
  const positives = raw_data.data.positives
  const total = raw_data.data.total

  type data = {
    name: string
    positives: string
  }
  let json: data
  json = { name: 'flight.exe', positives: `${positives}/${total}` }
  return json
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(await fetched())
}
