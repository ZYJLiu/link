import { useState } from "react"
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js"

export function useFetchBalance(pubKey: PublicKey | undefined) {
  const [balance, setBalance] = useState<number>()
  const connection = new Connection(clusterApiUrl("devnet"))

  const fetchBalance = async () => {
    if (pubKey) {
      try {
        const balance = await connection.getBalance(pubKey)
        setBalance(balance / LAMPORTS_PER_SOL)
        console.log(balance / LAMPORTS_PER_SOL)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return { balance, fetchBalance, connection }
}
