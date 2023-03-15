import React, { useMemo } from "react"
import {
  VStack,
  Text,
  Card,
  CardBody,
  HStack,
  Spacer,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
  Spinner,
} from "@chakra-ui/react"
import { ChevronDownIcon, AddIcon, ArrowDownIcon } from "@chakra-ui/icons"
import { PublicKey } from "@solana/web3.js"

interface BalanceCardProps {
  pubKey: PublicKey | undefined
  balance: number | null
  loading: boolean
  onDepositClick: () => void
  onWithdrawClick: () => void
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  pubKey,
  balance,
  loading,
  onDepositClick,
  onWithdrawClick,
}) => {
  const menuItems = useMemo(() => {
    return (
      <>
        <MenuItem icon={<ArrowDownIcon />} onClick={onWithdrawClick}>
          Withdraw
        </MenuItem>
        <MenuItem icon={<AddIcon />} onClick={onDepositClick}>
          Deposit Assets
        </MenuItem>
      </>
    )
  }, [onDepositClick, onWithdrawClick])

  const renderBalanceText = () => {
    if (loading) {
      return (
        <Flex alignItems="center">
          <Spinner size="md" />
          <Text ml={2}> Fetching Balance...</Text>
        </Flex>
      )
    }
    return <Text>Balance: {balance}</Text>
  }

  return (
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
            <MenuList>{menuItems}</MenuList>
          </Menu>
        </HStack>
        <VStack>
          <Text>PubKey: {pubKey?.toString()}</Text>
          {renderBalanceText()}
        </VStack>
      </CardBody>
    </Card>
  )
}

export default BalanceCard
