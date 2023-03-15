import { useEffect, useState } from "react"
import {
  VStack,
  Heading,
  Text,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Card,
  CardBody,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react"
import { Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { useFetchData } from "@/utils/useFetchData"
import { useFetchBalance } from "@/utils/useFetchBalance"
import { ModalDeposit } from "@/components/ModalDeposit"
import { ModalWithdraw } from "@/components/ModalWithdraw"
import { ChevronDownIcon, AddIcon, ArrowDownIcon } from "@chakra-ui/icons"
import axios from "axios"

export default function Link() {
  const { publicKey, sendTransaction } = useWallet()
  const { pubKey, fetchData } = useFetchData()
  const { balance, fetchBalance, connection } = useFetchBalance(pubKey)
  const depositDisclosure = useDisclosure()
  const withdrawDisclosure = useDisclosure()
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = window.location.hash.replace("#", "")
      fetchData(id)
      setId(id)
    }
  }, [])

  useEffect(() => {
    fetchBalance()
  }, [pubKey])

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

  async function handleDepositClick(amount: number) {
    if (!publicKey || !pubKey) {
      return
    }

    setLoading(true)
    depositDisclosure.onClose()
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
    } catch (error) {
      console.log("Transaction failed:", error)
    }
  }

  async function handleWithdrawClick(amount: number) {
    setLoading(true)
    const response = await axios.post("/api/withdraw", {
      id,
      amount,
      publicKey,
    })
    console.log(response.data.txSig)
    withdrawDisclosure.onClose()
    alert("Withdrawal successful!")
  }

  return (
    <VStack justifyContent="center">
      <Heading>URL</Heading>
      <Card>
        <CardBody>
          <HStack>
            <Spacer />
            <Menu placement="bottom-end">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<ChevronDownIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  icon={<ArrowDownIcon />}
                  onClick={withdrawDisclosure.onOpen}
                >
                  Withdraw
                </MenuItem>
                <MenuItem icon={<AddIcon />} onClick={depositDisclosure.onOpen}>
                  Deposit Assets
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <VStack>
            <Text>PubKey: {pubKey?.toString()}</Text>
            {loading ? <Spinner size="sm" /> : <Text>Balance: {balance}</Text>}
          </VStack>
        </CardBody>
      </Card>
      <ModalDeposit
        isOpen={depositDisclosure.isOpen}
        onClose={depositDisclosure.onClose}
        handleClick={handleDepositClick}
        loading={loading}
        setLoading={setLoading}
      />
      <ModalWithdraw
        isOpen={withdrawDisclosure.isOpen}
        onClose={withdrawDisclosure.onClose}
        handleClick={handleWithdrawClick}
      />
    </VStack>
  )
}
