import {
  Button,
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
import { useState } from "react"

export function ModalDeposit({
  isOpen,
  onClose,
  handleClick,
  loading,
  setLoading,
}: {
  isOpen: boolean
  onClose: () => void
  handleClick: (amount: number) => Promise<void>
  loading: boolean
  setLoading: (loading: boolean) => void
}) {
  const [amount, setAmount] = useState(0)

  return (
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
          <Button
            // isLoading={loading}
            // loadingText="Awaiting Confirmation"
            onClick={() => handleClick(amount)}
          >
            Confirm Deposit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
