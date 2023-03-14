import type { NextApiRequest, NextApiResponse } from "next"
import sha256 from "crypto-js/sha256"
import { Keypair } from "@solana/web3.js"

const generateKeypair = (id: string, salt: string) => {
  const saltedValue = `${id}${salt}`
  const buffer = Buffer.from(sha256(saltedValue).toString()).subarray(0, 32)
  const keypair = Keypair.fromSeed(new Uint8Array(buffer))
  return keypair
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body
  console.log(id)
  const keypair = generateKeypair(id, "salt")

  res.status(200).json({
    publicKey: keypair.publicKey.toBase58(),
  })
}
