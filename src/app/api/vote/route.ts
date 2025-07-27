import { NextRequest, NextResponse } from "next/server";

// Declare global type for vote results
declare global {
  var voteResults: number[] | undefined;
}

// Helper function to get vote results from global storage
function getVoteResults(): number[] {
  if (typeof globalThis !== 'undefined' && !globalThis.voteResults) {
    globalThis.voteResults = [0, 0, 0, 0, 0, 0, 0];
  }
  return globalThis.voteResults || [0, 0, 0, 0, 0, 0, 0];
}

// Helper function to save vote results to global storage
function saveVoteResults(results: number[]): void {
  if (typeof globalThis !== 'undefined') {
    globalThis.voteResults = results;
  }
}

// 0 อาสาสมัคร
// 1 ซิน
// 2 ซัน
// 3 นิค
// 4 จ๊อบ
// 5 แพร
// 6 นีร

export async function GET() {
  try {
    const voteresult = getVoteResults();
    return NextResponse.json({ voteresult })
  } catch (err) {
    const voteresult = [0, 0, 0, 0, 0, 0, 0];
    return NextResponse.json({ voteresult }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { vote_id } = await req.json()
    const voteresult = getVoteResults();
    
    if (vote_id >= 0 && vote_id < voteresult.length) {
      voteresult[vote_id] += 1;
      saveVoteResults(voteresult);
    }
    
    return NextResponse.json({ voteresult })
  } catch (err) {
    const voteresult = getVoteResults();
    return NextResponse.json({ voteresult }, { status: 500 })
  }
}
