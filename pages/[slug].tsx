import { useCallback, useEffect, useState } from "react"
import {
  Heading,
  VStack,
  Card,
  CardBody,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Spacer,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
} from "@chakra-ui/react"
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons"
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js"
import axios from "axios"
import { useWallet } from "@solana/wallet-adapter-react"

export default function Link() {
  const { publicKey, sendTransaction, connect } = useWallet()
  const [pubKey, setPubKey] = useState<PublicKey>()
  const [balance, setBalance] = useState<number>()
  const connection = new Connection(clusterApiUrl("devnet"))
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [amount, setAmount] = useState(0)

  const fetchData = useCallback(async (id: string) => {
    const response = await axios.post("/api/keypair", { id })
    setPubKey(new PublicKey(response.data.publicKey))
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = window.location.hash.replace("#", "")
      fetchData(id)
    }
  }, [])

  const fetchBalance = async () => {
    if (pubKey) {
      const balance = await connection.getBalance(pubKey)
      setBalance(balance / LAMPORTS_PER_SOL)
      console.log(balance / LAMPORTS_PER_SOL)
    }
  }

  async function handleClick() {
    if (publicKey && pubKey) {
      try {
        console.log(amount)
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: pubKey,
            lamports: amount * LAMPORTS_PER_SOL,
          })
        )
        const txSig = await sendTransaction(transaction, connection)
        console.log(txSig)

        const { blockhash, lastValidBlockHeight } =
          await connection.getLatestBlockhash()

        await connection
          .confirmTransaction(
            {
              blockhash,
              lastValidBlockHeight,
              signature: txSig,
            },
            "confirmed"
          )
          .then(() => fetchBalance())

        console.log("confirmed")
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchBalance()
  }, [connection, pubKey])

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
                <MenuItem icon={<AddIcon />} onClick={onOpen}>
                  Deposit Assets
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <VStack>
            <Text>PubKey: {pubKey?.toString()}</Text>
            <Text>Balance: {balance}</Text>
          </VStack>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={300}>
          <ModalHeader>Deposit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center">
              <NumberInput
                onChange={(value) => setAmount(Number(value))}
                width={100}
                defaultValue={0}
                precision={2}
                step={0.01}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleClick}>Confirm Deposit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  )
}
