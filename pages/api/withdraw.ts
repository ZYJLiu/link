import type { NextApiRequest, NextApiResponse } from "next"
import sha256 from "crypto-js/sha256"
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
} from "@solana/web3.js"

const generateKeypair = (id: string, salt: string) => {
  const saltedValue = `${id}${salt}`
  const buffer = Buffer.from(sha256(saltedValue).toString()).subarray(0, 32)
  const keypair = Keypair.fromSeed(new Uint8Array(buffer))
  return keypair
}

const connection = new Connection(clusterApiUrl("devnet"))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, amount, publicKey } = req.body
  console.log(id)
  const keypair = generateKeypair(id, "salt")

  let txSig
  try {
    const lamports = amount * LAMPORTS_PER_SOL
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: publicKey,
        lamports,
      })
    )

    txSig = await connection.sendTransaction(transaction, [keypair])
    console.log("Transaction sent:", txSig)

    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash()

    await connection.confirmTransaction(
      {
        blockhash,
        lastValidBlockHeight,
        signature: txSig,
      },
      "confirmed"
    )
  } catch (error) {
    console.log("Transaction failed:", error)
  }

  res.status(200).json({
    txSig: txSig,
  })
}
