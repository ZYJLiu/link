import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js"
import { useCallback } from "react"

export function useDeposit(
  publicKey: PublicKey | null,
  pubKey: PublicKey | undefined,
  connection: Connection,
  sendTransaction: (
    transaction: Transaction,
    connection: Connection
  ) => Promise<string>,
  onClose: () => void,
  setLoading: (loading: boolean) => void
) {
  const handleDepositClick = useCallback(
    async (amount: number) => {
      if (!publicKey || !pubKey) {
        return
      }

      try {
        const lamports = amount * LAMPORTS_PER_SOL
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: pubKey,
            lamports,
          })
        )

        const txSig = await sendTransaction(transaction, connection)
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

        setLoading(true)
        onClose()
      } catch (error) {
        console.log("Transaction failed:", error)
      }
    },
    [publicKey, pubKey]
  )

  return { handleDepositClick }
}
