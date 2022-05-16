// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This will soon be a personal API endpoint for stats about myself

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
  positives: string
}

async function fetched(){
  const raw_data = await axios.get(`https://www.virustotal.com/vtapi/v2/file/report?apikey=${process.env.VIRUSTOTAL_API_KEY}&resource=f7748343325785c81476bc802441010b624b3bbd989770a8b3ee5b694a7d5ed7`)
  const positives = raw_data.data.positives
  const total = raw_data.data.total

  type data = {
    name: string
    positives: string
  }
  let json: data
  json = { name: 'cli-win.exe', positives: `${positives}/${total}` }
  return json
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(await fetched())
}
