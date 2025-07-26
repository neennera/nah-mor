import { NextRequest, NextResponse } from "next/server";

let voteresult = [0, 0, 0, 0, 0, 0, 0]
// 0 อาสาสมัคร
// 1 ซิน
// 2 ซัน
// 3 นิค
// 4 จ๊อบ
// 5 แพร
// 6 นีร

export async function GET() {
  try {
    return NextResponse.json({ voteresult })
  } catch (err) {
    return NextResponse.json({ voteresult }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { vote_id } = await req.json()
    if (vote_id >= 0 && vote_id < voteresult.length) {
      voteresult[vote_id] += 1;
    }
    return NextResponse.json({ voteresult })
  } catch (err) {
    return NextResponse.json({ voteresult }, { status: 500 })
  }
}