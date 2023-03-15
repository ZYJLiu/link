import { PublicKey } from "@solana/web3.js"
import axios from "axios"

export function useWithdraw(
  id: string,
  publicKey: PublicKey | null,
  onClose: () => void,
  setLoading: (loading: boolean) => void
) {
  const handleWithdrawClick = async (amount: number) => {
    try {
      const response = await axios.post("/api/withdraw", {
        id,
        amount,
        publicKey,
      })

      console.log(response.data.txSig)
      onClose()
      setLoading(true)
      alert("Transaction Confirmed")
    } catch (error) {
      console.error("Failed to withdraw:", error)
      onClose()
    }
  }

  return { handleWithdrawClick }
}
