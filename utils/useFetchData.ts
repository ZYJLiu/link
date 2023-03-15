import { useCallback } from "react"
import { useState } from "react"
import axios from "axios"
import { PublicKey } from "@solana/web3.js"

export function useFetchData() {
  const [pubKey, setPubKey] = useState<PublicKey>()

  const fetchData = useCallback(async (id: string) => {
    try {
      const response = await axios.post("/api/keypair", { id })
      setPubKey(new PublicKey(response.data.publicKey))
    } catch (error) {
      console.error("Failed to fetch data:", error)
    }
  }, [])

  return { pubKey, fetchData }
}
