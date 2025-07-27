import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Initialize votes for all candidates (0-6)
async function initializeVotes() {
  const candidates = [0, 1, 2, 3, 4, 5, 6]; // candidateId mapping
  
  for (const candidateId of candidates) {
    await prisma.vote.upsert({
      where: { candidateId },
      update: {},
      create: { candidateId, count: 0 }
    });
  }
}

export async function GET() {
  try {
    await initializeVotes();
    
    const votes = await prisma.vote.findMany({
      orderBy: { candidateId: 'asc' }
    });
    
    // Convert to array format [candidate0_votes, candidate1_votes, ...]
    const voteresult = votes.map((vote: any) => vote.count);
    
    return NextResponse.json({ voteresult });
  } catch (err) {
    console.error('GET /api/vote error:', err);
    return NextResponse.json({ voteresult: [0, 0, 0, 0, 0, 0, 0] }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { vote_id } = await req.json();
    
    if (vote_id >= 0 && vote_id <= 6) {
      await initializeVotes();
      
      // Increment vote count for the candidate
      await prisma.vote.update({
        where: { candidateId: vote_id },
        data: { count: { increment: 1 } }
      });
      
      // Return updated vote results
      const votes = await prisma.vote.findMany({
        orderBy: { candidateId: 'asc' }
      });
      const voteresult = votes.map((vote: any) => vote.count);
      
      return NextResponse.json({ voteresult });
    }
    
    return NextResponse.json({ error: 'Invalid vote_id' }, { status: 400 });
  } catch (err) {
    console.error('POST /api/vote error:', err);
    return NextResponse.json({ error: 'Failed to record vote' }, { status: 500 });
  }
}
