import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react"
import React, { useState } from "react"
import TipLinkDepositDefault from "./TipLinkDepositDefault"
import TipLinkDepositAmount from "./TipLinkDepositAmount"

interface ModalDepositProps {
  isOpen: boolean
  onClose: () => void
  mode?: "deposit" | "withdraw"
}

const TipLinkDepositModal: React.FC<ModalDepositProps> = ({
  isOpen,
  onClose,
  mode,
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
