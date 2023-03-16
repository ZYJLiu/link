import { useEffect, useState } from "react"
import { VStack, Heading, useDisclosure, Box } from "@chakra-ui/react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useFetchData } from "@/utils/useFetchData"
import { useFetchBalance } from "@/utils/useFetchBalance"
import ModalDeposit from "@/components/ModalDeposit"
import ModalWithdraw from "@/components/ModalWithdraw"
import { useDeposit } from "@/utils/useDeposit"
import { useWithdraw } from "@/utils/useWithdraw"
import BalanceCard from "@/components/BalanceCard"
import TipLinkWallet from "@/components/TipLinkWallet"

export default function Link() {
  const { publicKey, sendTransaction } = useWallet()
  const { pubKey, fetchData } = useFetchData()
  const { balance, fetchBalance, connection } = useFetchBalance(pubKey)

  const [id, setId] = useState("")
  const [loading, setLoading] = useState(false)

  const depositDisclosure = useDisclosure()
  const withdrawDisclosure = useDisclosure()

  const { handleDepositClick } = useDeposit(
    publicKey,
    pubKey,
    connection,
    sendTransaction,
    depositDisclosure.onClose,
    setLoading
  )

  const { handleWithdrawClick } = useWithdraw(
    id,
    publicKey,
    withdrawDisclosure.onClose,
    setLoading
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = window.location.hash.replace("#", "")
      fetchData(id)
      setId(id)
    }
  }, [])

  useEffect(() => {
    if (!pubKey) return
    const id = connection.onAccountChange(pubKey, () => {
      fetchBalance()
      setLoading(false)
    })

    return () => {
      connection.removeAccountChangeListener(id)
    }
  }, [pubKey])

  return (
    <Box>
      <VStack justifyContent="center">
        <Heading>Link</Heading>
        <BalanceCard
          pubKey={pubKey}
          balance={balance}
          loading={loading}
          onDepositClick={depositDisclosure.onOpen}
          onWithdrawClick={withdrawDisclosure.onOpen}
        />
        <ModalDeposit
          isOpen={depositDisclosure.isOpen}
          onClose={depositDisclosure.onClose}
          handleClick={handleDepositClick}
        />
        <ModalWithdraw
          isOpen={withdrawDisclosure.isOpen}
          onClose={withdrawDisclosure.onClose}
          handleClick={handleWithdrawClick}
        />
      </VStack>
      <TipLinkWallet />
    </Box>
  )
}
