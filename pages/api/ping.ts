// pages/api/ping.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).send('pong');
}
