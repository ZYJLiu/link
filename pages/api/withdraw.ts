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
  try {
    const { id, amount, publicKey } = req.body

    if (!id || !amount || !publicKey) {
      return res.status(400).json({
        error: "Missing or invalid parameters in request body.",
      })
    }

    const keypair = generateKeypair(id, "salt")
    const lamports = amount * LAMPORTS_PER_SOL - 5000
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        toPubkey: publicKey,
        lamports,
      })
    )

    const txSig = await connection.sendTransaction(transaction, [keypair])
    console.log("Transaction sent:", txSig)

    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash()
    const confirmationStatus = await connection.confirmTransaction(
      {
        blockhash,
        lastValidBlockHeight,
        signature: txSig,
      },
      "confirmed"
    )

    if (!confirmationStatus) {
      throw new Error("Transaction confirmation failed.")
    }

    res.status(200).json({ txSig })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({ error: "An internal server error occurred." })
  }
}
