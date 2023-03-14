import type { NextApiRequest, NextApiResponse } from "next"
import sha256 from "crypto-js/sha256"
import { Keypair } from "@solana/web3.js"

const generateKeypair = (id: string) => {
  const buffer = Buffer.from(sha256(id).toString()).subarray(0, 32)
  const keypair = Keypair.fromSeed(new Uint8Array(buffer))
  return keypair
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body
  const keypair = generateKeypair(id)

  res.status(200).json({
    publicKey: keypair.publicKey.toBase58(),
  })
}
