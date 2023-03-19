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
  Box,
  Text,
  Input,
  Icon,
  Image,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react"
import { ArrowRight } from "react-feather"
import React, { useState } from "react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import TipLinkDepositDefault from "./TipLinkDepositDefault"
import TipLinkDepositAmount from "./TipLinkDepositAmount"

interface ModalDepositProps {
  isOpen: boolean
  onClose: () => void
  handleClick?: (amount: number) => Promise<void>
}

const TipLinkDepositModal: React.FC<ModalDepositProps> = ({
  isOpen,
  onClose,
  handleClick,
}) => {
  const [isOpenForm, setIsOpenForm] = useState(false)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={10} borderRadius="xl" opacity={1} transform="none">
        <ModalCloseButton />
        {isOpenForm ? (
          <TipLinkDepositAmount
            onClose={onClose}
            setIsOpenForm={setIsOpenForm}
          />
        ) : (
          <TipLinkDepositDefault
            onClose={onClose}
            setIsOpenForm={setIsOpenForm}
          />
        )}
      </ModalContent>
    </Modal>
  )
}

export default React.memo(TipLinkDepositModal)
