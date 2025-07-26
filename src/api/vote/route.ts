import { NextApiRequest, NextApiResponse } from "next";

let voteresult = [0, 0, 0, 0, 0, 0, 0]
// 0 candidate
// 1 cin
// 2 sun
// 3 nick
// 4 job
// 5 pear
// 6 neen

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   try {
    const { vote_id } = req.body
    voteresult[vote_id] += 1;
    res.status(200).json({ voteresult })
  } catch (err) {
    res.status(500).json({ voteresult })
  }
}