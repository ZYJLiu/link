import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react"
import React, { useState } from "react"
import TipLinkWithdrawDefault from "./TipLinkWithdrawDefault"
import TipLinkWithdrawAmount from "./TipLinkWithdrawAmount"

interface ModalDepositProps {
  isOpen: boolean
  onClose: () => void
}

const TipLinkDepositModal: React.FC<ModalDepositProps> = ({
  isOpen,
  onClose,
}) => {
  const [isOpenForm, setIsOpenForm] = useState(false)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={10} borderRadius="xl" opacity={1} transform="none">
        <ModalCloseButton />
        {isOpenForm ? (
          <TipLinkWithdrawAmount
            onClose={onClose}
            setIsOpenForm={setIsOpenForm}
          />
        ) : (
          <TipLinkWithdrawDefault
            onClose={onClose}
            setIsOpenForm={setIsOpenForm}
          />
        )}
      </ModalContent>
    </Modal>
  )
}

export default React.memo(TipLinkDepositModal)
